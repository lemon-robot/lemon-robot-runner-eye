<template>
  <div class="instruction-set-add-part">
    <div class="list-end-add-button"
         @click="createPanelState = true">
      <i class="el-icon-plus"></i> {{$t(lang + 'add')}}
    </div>
    <el-dialog
        @open="handleOpen"
        :title="$t(lang + 'add')"
        :visible.sync="createPanelState"
        class="form-dialog">
      <el-form :ref="formName" :model="form" :rules="rules" label-width="140px">
        <el-form-item :label="$t(lang + 'instruction_set_name')" prop="instructionSetKey" class="dialog-field">
          <el-input :placeholder="$t(lang + 'instruction_set_name_placeholder')"
                    v-model="form.name">
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="createPanelState = false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="createInstructionSet">{{$t('common.create')}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button.vue'

  export default {
    components: {ElButton},
    name: 'InstructionSetAddPart',
    methods: {
      handleOpen () {
        this.form.name = ''
      },
      createInstructionSet () {
        this.$refs[this.formName].validate((valid) => {
          if (valid) {
            this.$axios.put(this.$define.URL.TASK.INSTRUCTION.CREATE, this.form)
              .then(() => {
                this.$store.dispatch(this.$NS.TASK.ACT_REFRESH_INSTRUCTION_SET_LIST)
                this.$util.tip.notification_success(this.$t(this.lang + 'tip_add_success'))
                this.createPanelState = false
                this.form.instructionSetKey = ''
              })
          }
        })
      }
    },
    data () {
      return {
        lang: 'task.instructionSetAddPart.',
        createPanelState: false,
        formName: 'addInstructionSet',
        form: {
          taskKey: this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].taskKey,
          name: ''
        },
        rules: {
          name: this.$define.RULES.COMMON_KEY
        }
      }
    }
  }
</script>

<style scoped>
  .instruction-set-add-part {
    text-align: center;
  }
</style>
