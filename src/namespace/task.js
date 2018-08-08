/**
 * 获取任务列表
 */
const GET_TASK_LIST = 'TASK_GET_TASK_LIST'
/**
 * 获取当前的状态
 */
const GET_CURRENT_STATE = 'TASK_GET_CURRENT_STATE'
/**
 * 获取当前正在编辑的任务
 */
const GET_CURRENT_EDIT_TASK = 'TASK_GET_CURRENT_EDIT_TASK'
/**
 * 获取当前正在编辑的任务的指令集列表
 */
const GET_CURRENT_INSTRUCTION_SET_LIST = 'TASK_GET_CURRENT_INSTRUCTION_SET_LIST'
/**
 * 获取正在编辑的指令集关键字
 * @type {string}
 */
const GET_CURRENT_INSTRUCTION_SET_KEY = 'TASK_GET_CURRENT_INSTRUCTION_SET_KEY'
/**
 * 获取当前是否正在编辑中的任务
 */
const GET_HAVE_EDITING_TASK = 'TASK_GET_HAVE_EDITING_TASK'
/**
 * 获取当前正在编辑中的数据集关键字
 */
const GET_CURRENT_DATA_SET_KEY = 'TASK_GET_CURRENT_DATA_SET_KEY'
/**
 * 获取当前正在编辑中的数据集对象
 */
const GET_CURRENT_DATA_SET = 'TASK_GET_CURRENT_DATA_SET'

/**
 * 设置状态为：拉取任务列表完毕，但是为空，无任务
 */
const MUT_SET_STATE_EMPTY = 'TASK_MUT_SET_STATE_EMPTY'
/**
 * 设置状态为：正在拉取任务列表中
 */
const MUT_SET_STATE_PULLING = 'TASK_MUT_SET_STATE_PULLING'
/**
 * 设置状态为：拉取状态列表失败
 */
const MUT_SET_STATE_FAILED = 'TASK_MUT_SET_STATE_FAILED'
/**
 * 设置状态为：拉取状态列表完毕，存在数据
 */
const MUT_SET_STATE_NORMAL = 'TASK_MUT_SET_STATE_NORMAL'
/**
 * 保存任务列表
 */
const MUT_SET_TASK_LIST = 'TASK_MUT_SET_TASK_LIST'
/**
 * 设置当前正在编辑的任务
 */
const MUT_SET_CURRENT_EDIT_TASK = 'TASK_MUT_SET_CURRENT_EDIT_TASK'
/**
 * 设置当前正在编辑任务的指令集列表
 */
const MUT_SET_CURRENT_INSTRUCTION_SET_LIST = 'TASK_MUT_SET_CURRENT_INSTRUCTION_SET_LIST'
/**
 * 设置当前正在编辑的指令集关键字
 */
const MUT_SET_CURRENT_INSTRUCTION_SET_KEY = 'TASK_MUT_SET_CURRENT_INSTRUCTION_SET_KEY'
/**
 * 关闭当前正在编辑的任务
 */
const MUT_SET_CLOSE_EDIT_TASK = 'TASK_MUT_SET_CLOSE_EDIT_TASK'
/**
 * 为正在编辑中的任务添加数据集
 */
const MUT_PUT_EDITING_TASK_DATA_SET = 'TASK_MUT_PUT_EDITING_TASK_DATA_SET'
/**
 * 设置当前正在编辑的数据集关键字
 */
const MUT_SET_CURRENT_DATA_SET_KEY = 'TASK_MUT_SET_CURRENT_DATA_SET'

/**
 * 从服务器刷新任务列表
 */
const ACT_REFRESH_TASK_LIST = 'TASK_ACT_REFRESH_TASK_LIST'
/**
 * 从服务器刷新指令集列表
 */
const ACT_REFRESH_INSTRUCTION_SET_LIST = 'TASK_ACT_REFRESH_INSTRUCTION_SET_LIST'
/**
 * 保存当前正在编辑的任务
 */
const ACT_SAVE_CURRENT_EDITING_TASK = 'TASK_ACT_SAVE_CURRENT_EDITING_TASK'
/**
 * 保存指令集脚本
 */
const ACT_SAVE_INSTRUCTION_SET_SCRIPT = 'TASK_ACT_SAVE_INSTRUCTION_SET_SCRIPT'

export default {
  GET_TASK_LIST,
  GET_CURRENT_STATE,
  GET_CURRENT_EDIT_TASK,
  GET_CURRENT_INSTRUCTION_SET_LIST,
  GET_CURRENT_INSTRUCTION_SET_KEY,
  GET_HAVE_EDITING_TASK,
  GET_CURRENT_DATA_SET_KEY,
  GET_CURRENT_DATA_SET,
  MUT_SET_STATE_EMPTY,
  MUT_SET_STATE_PULLING,
  MUT_SET_STATE_FAILED,
  MUT_SET_STATE_NORMAL,
  MUT_SET_TASK_LIST,
  MUT_SET_CURRENT_EDIT_TASK,
  MUT_SET_CURRENT_INSTRUCTION_SET_LIST,
  MUT_SET_CURRENT_INSTRUCTION_SET_KEY,
  MUT_SET_CLOSE_EDIT_TASK,
  MUT_PUT_EDITING_TASK_DATA_SET,
  MUT_SET_CURRENT_DATA_SET_KEY,
  ACT_REFRESH_TASK_LIST,
  ACT_REFRESH_INSTRUCTION_SET_LIST,
  ACT_SAVE_CURRENT_EDITING_TASK,
  ACT_SAVE_INSTRUCTION_SET_SCRIPT
}