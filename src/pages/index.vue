<template>
  <div class="bg-gray-50 dark:bg-slate-900">

    <!--侧边栏 start-->
    <sidebar/>
    <!--侧边栏 end-->

    <div class="w-full">
      <!--导航栏 start-->
      <navbar/>
      <!--导航栏 end-->

      <!--内容 start-->
      <div class="lg:ml-56">
        <div class="max-w-2xl px-4 py-8 mx-auto lg:py-16 ">
          <form action="#">
            <!--基本配置 start-->
            <div class="pb-4 border-b">
              <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">基本配置</h2>
              <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">模板名称</label>
                  <input type="text" name="name" id="name"
                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                         value="" placeholder="模板名称" required="">
                </div>
                <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">模板业务方</label>
                  <input type="text" name="name" id="business"
                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                         value="" placeholder="模板业务方" required="">
                </div>
                <div>
                  <label for="category"
                         class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">接收者Id类型</label>
                  <select id="category"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option selected="">-请选择-</option>
                    <option value="用户ID">用户ID</option>
                    <option value="设备号">设备号</option>
                    <option value="手机号">手机号</option>
                    <option value="openID">openID</option>
                    <option value="邮箱地址">邮箱地址</option>
                    <option value="企业微信userId">企业微信userId</option>
                    <option value="钉钉userId">钉钉userId</option>
                    <option value="推送通知栏cid">推送通知栏cid</option>
                    <option value="飞书userId">飞书userId</option>
                  </select>
                </div>
                <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">消息类型</label>
                  <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input id="businessType1" type="radio" value="" name="businessType"
                               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="businessType1"
                               class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">通知类</label>
                      </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input id="businessType2" type="radio" value="" name="businessType"
                               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="businessType2"
                               class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">营销类</label>
                      </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input id="businessType3" type="radio" value="" name="businessType"
                               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="businessType3"
                               class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">验证码</label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">屏蔽类型</label>
                  <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input id="shieldingType1" type="radio" value="" name="shieldingType"
                               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="shieldingType1"
                               class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">夜间不屏蔽</label>
                      </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input id="shieldingType2" type="radio" value="" name="shieldingType"
                               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="shieldingType2"
                               class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">夜间屏蔽</label>
                      </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input id="shieldingType3" type="radio" value="" name="shieldingType"
                               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="shieldingType3"
                               class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">次日早上发送</label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">消息模板类型</label>
                  <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input id="messageTemplateType1" type="radio" value="" name="messageTemplateType"
                               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="messageTemplateType1"
                               class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">定时</label>
                      </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input id="messageTemplateType2" type="radio" value="" name="messageTemplateType"
                               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="messageTemplateType2"
                               class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">实时</label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!--基本配置 end-->

            <!--渠道信息 start-->
            <div class="mt-8 mb-8">
              <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">渠道信息</h2>
              <div>
                <label for="category"
                       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">发送渠道</label>
                <select id="sendingChannel"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                  <option selected="">-请选择-</option>
                  <option value="PUSH通知栏">PUSH通知栏</option>
                  <option value="短信">短信</option>
                  <option value="邮箱">邮箱</option>
                  <option value="微信服务号（模板消息）">微信服务号（模板消息）</option>
                  <option value="微信小程序（订阅消息）">微信小程序（订阅消息）</option>
                  <option value="企业微信">企业微信</option>
                  <option value="钉钉群机器人">钉钉群机器人</option>
                  <option value="钉钉工作消息">钉钉工作消息</option>
                  <option value="企业微信机器人">企业微信机器人</option>
                  <option value="飞书机器人">飞书机器人</option>
                </select>
              </div>
            </div>
            <!--渠道信息 end-->
            <div class="flex items-center space-x-4">
              <button type="button"
                      class="text-green-600 inline-flex items-center hover:text-white border border-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-900">
                <icon-confirm/>
                保存
              </button>
            </div>
          </form>
        </div>
      </div>
      <!--内容 end-->
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import UsePinia from '@/components/UsePinia.vue';
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
import IconConfirm from "@/icon/IconConfirm.vue";

export default defineComponent({
  name: 'IndexPage',
  components: {
    IconConfirm,
    Navbar,
    Sidebar,
    UsePinia
  }
});
</script>
