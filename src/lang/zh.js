export default {
  app: {
    app_name: '柠檬机器人',
    cloud_name: '柠檬云',
    company_name: '柠檬信息技术有限公司',
    company_domain: 'LemonIT.CN'
  },
  common: {
    private_cloud: '私有云',
    successful: '成功',
    failed: '失败',
    task_id: '任务ID',
    task_name: '任务名称',
    instruction_set_key: '指令集标识',
    instruction_set_name: '指令集名称',
    data_set_key: '数据集标识',
    data_set_name: '数据集名称',
    please_input: '请输入',
    cancel: '取消',
    create: '创建',
    modify: '修改',
    delete: "删除",
    connect: '连接',
    saving: '正在保存中',
    run: '运行',
    dateStr: 'yyyy年MM月dd日 hh:mm:ss'
  },
  responseMsg: {
    timeout: '对不起，连接服务器超时',
    error: '对不起，服务器响应解析异常',
    lrc_disconnected: '与服务器的LRC连接已断开，无法完成请求',
    task_operate_failed_server_error: '对不起，任务操作失败，服务器内部错误',
    instruction_set_operate_failed_key_exists: '对不起，指令集操作失败，您提供的指令集关键字已经存在',
    task_operate_failed_not_exists: '对不起，任务操作失败，您要操作的任务已经不存在',
    task_update_base_info_mismatch: '对不起，更新任务基本信息失败，任务基础信息不允许被修改',
    instruction_set_not_exists: '对不起，指令集不存在，无法进行操作',
    instruction_set_main_cannot_change: '对不起，主指令集不能进行删除或修改关键字等操作'
  },
  operator: {
    userPart: {
      login_to: '登录到',
      sign_up: '立即创建用户'
    },
    cloudPart: {},
    mainMenuPart: {
      task: '任务编辑器',
      executor: '执行器',
      plan: '计划',
      cloud: '云端管理',
      plugin: '插件管理',
      data: '数据中心',
      logs: '日志',
      system: '系统设置'
    },
    technologySupportPart: {},
  },
  lrc: {
    lrcContainer: {
      server_address: '服務器地址',
      tip_pre: '您还没有连接至',
      tip_end: '服务，请您输入连接信息',
      connect_failed_tip: 'LRC尝试连接失败，无法连接至服务器',
      connect_disconnected_tip: 'LRC服务已断开，请重新连接',
      connect_connected_tip: 'LRC服务连接成功'
    }
  },
  task: {
    taskSelectorContainer: {
      main_title: '请您选择一个要编辑的任务',
      sub_title1: '您可以在下面的列表中选择已添加的任务进行编辑',
      sub_title2: '或者您也可以点击添加任务按钮来创建一个新的任务'
    },
    taskCreatePart: {
      create_task: '创建任务',
      task_key: '任务标识',
      task_name: '任务名称',
      task_key_placeholder: '仅允许由英文、数字、下划线组成',
      task_name_placeholder: '请输入一个简短而清晰的名称',
      create_task_loading: '任务正在创建中，请稍候...',
      create_task_success: '任务创建成功'
    },
    taskListPart: {
      task_list_tip_empty: '当前没有可以编辑的任务',
      task_list_tip_pulling: '正在从服务器中获取任务列表...',
      task_list_tip_failed: '从服务器端获取任务列表失败',
      task_create_time: '任务创建时间'
    },
    taskEditPart: {
      mTitle: '任务编辑器',
      mIntro: '你可以通过任务编辑器来编写您的指令集、数据集',
      instruction: '指令集',
      data: '数据集'
    },
    instructionSetPart: {
      loading_script: '正在加载指令集脚本...'
    },
    instructionSetAddPart: {
      add: '添加指令集',
      instruction_set_key: '指令集关键字',
      instruction_set_key_placeholder: '请输入指令集关键字字符串',
      tip_add_success: '指令集创建成功'
    },
    instructionSetOperatePart: {
      rekey: '修改指令集关键字',
      delete: '删除这个指令集',
      instruction_set_key: '指令集关键字',
      instruction_set_key_placeholder: '请您输入新的指令集关键字',
      rekey_success: '修改指令集关键字成功!',
      delete_tip: '确认要删除这个指令集吗？'
    }
  },
  executor: {},
  plan: {},
  cloud: {},
  plugin: {
    pluginContainer: {
      mTitle: '插件管理器',
      mIntro: '在这里，您可以对您本地的插件进行管理，也可以访问插件商店来在线安装新的插件',
      installed: '已安装插件',
      store: '插件商店'
    }
  },
  data: {},
  logs: {},
  system: {}
}
