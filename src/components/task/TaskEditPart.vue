<template>
  <div class="task-edit-part">
    <div class="title-area general-background-twill-light">
      <common-title-view icon="el-icon-task"
                         :title="$t(lang + 'mTitle') + ' - ' + $store.getters[$NS.TASK.GET_CURRENT_EDIT_TASK].taskName"
                         :intro="$t(lang + 'mIntro')"></common-title-view>
      <common-menu-view :lang="lang" :config="menu"></common-menu-view>
    </div>
    <el-button class="task-edit-close-button" @click="closeEditingTask" icon="el-icon-close"
               circle></el-button>
    <task-menu-part class="task-menu-part"></task-menu-part>
    <router-view class="task-edit-part-content"></router-view>
  </div>
</template>

<script>
  import TaskMenuPart from './TaskMenuPart'
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button.vue'
  import CommonTitleView from '../common/CommonTitleView'
  import CommonMenuView from '../common/CommonMenuView'

  export default {
    name: 'TaskEditPart',
    components: {
      ElButton,
      TaskMenuPart,
      CommonMenuView,
      CommonTitleView
    },
    methods: {
      closeEditingTask () {
        this.$store.commit(this.$NS.TASK.MUT_SET_CLOSE_EDIT_TASK)
      }
    },
    data () {
      return {
        lang: 'task.taskEditPart.',
        menu: [
          {
            title: 'parameter',
            target: '/task/parameter'
          },
          {
            title: 'instruction',
            target: '/task/instruction'
          },
          {
            title: 'plugin',
            target: '/task/plugin'
          },
          {
            title: 'instance',
            target: '/task/instance'
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .task-edit-part {
    display: flex;
    flex-direction: column;
  }

  .task-edit-close-button {
    position: absolute;
    right: 30px;
    top: 35px;
    font-size: 24px;
  }

  .task-menu-part{
    position: absolute;
    right: 100px;
    top: 35px;
  }

  .task-edit-part-content {
    flex-grow: 1;
  }
</style>