<template>
  <div>
    <div
        class="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
      <div class="flex items-center py-4">
        <!-- Navigation Toggle -->
        <button type="button" class="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar"
                aria-controls="application-sidebar" aria-label="Toggle navigation">
          <span class="sr-only">Toggle Navigation</span>
          <icon-bar/>
        </button>
        <!-- End Navigation Toggle -->

        <!-- Breadcrumb -->
        <ol class="ml-3 flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
          <li class="flex items-center text-sm text-gray-800 dark:text-gray-400">
            Application Layout
            <icon-rightArrow/>
          </li>
          <li class="text-sm font-semibold text-gray-800 truncate dark:text-gray-400" aria-current="page">
            Dashboard
          </li>
        </ol>
        <!-- End Breadcrumb -->
      </div>
    </div>
    <div id="application-sidebar"
         class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700">
      <!--Logo start-->
      <div class="px-6">
        <a class="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Austin</a>
      </div>
      <!--Logo end-->
      <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>

        <!--模板管理 start-->
        <div class="pb-4">
          <span class="inline-block mb-4 text-sm text-slate-400 dark:text-white">模板管理</span>
          <ul class="space-y-1.5">
            <li>
              <a class="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white"
                 href="#">
                <icon-home/>
                <span>首页</span>
              </a>
            </li>
            <li class="hs-accordion" id="projects-accordion">
              <a class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                 href="#">
                <icon-notice/>
                <span>模板管理</span>
                <icon-upArrow/>
                <icon-downArrow/>
              </a>

              <div id="projects-accordion-sub"
                   class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                <ul class="pt-2 pl-2">
                  <li>
                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                       href="#">
                      <span>新建模板</span>
                    </a>
                  </li>
                  <li>
                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                       href="#">
                      <span>模板管理</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <!--模板管理 end-->

        <!--数据管理 start-->
        <div class="pb-4">
          <span class="inline-block mb-4 text-sm text-slate-400 dark:text-white">数据管理</span>
          <ul class="space-y-1.5">
            <li class="hs-accordion">
              <a class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                 href="#">
                <icon-notice/>
                <span>全链路追踪</span>
                <icon-upArrow/>
                <icon-downArrow/>
              </a>

              <div
                  class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                <ul class="pt-2 pl-2">
                  <li>
                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                       href="#">
                      用户全链路追踪
                    </a>
                  </li>
                  <li>
                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                       href="#">
                      消息模板全链路追踪
                    </a>
                  </li>
                  <li>
                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                       href="#">
                      短信下发查询
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <!--数据管理 end-->

        <!--素材管理 start-->
        <div class="pb-4">
          <span class="inline-block mb-4 text-sm text-slate-400 dark:text-white">素材管理</span>
          <ul class="space-y-1.5">
            <li class="hs-accordion">
              <a class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                 href="#">
                <icon-notice/>
                <span>渠道物料管理</span>
                <icon-upArrow/>
                <icon-downArrow/>
              </a>

              <div
                  class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                <ul class="pt-2 pl-2">
                  <li>
                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                       href="#">
                      上传素材
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <!--素材管理 end-->

        <!--账号管理 start-->
        <div class="pb-4">
          <span class="inline-block mb-4 text-sm text-slate-400 dark:text-white">账号管理</span>
          <ul class="space-y-1.5">
            <li class="hs-accordion">
              <a class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                 href="#">
                <icon-notice/>
                <span>渠道账号管理</span>
                <icon-upArrow/>
                <icon-downArrow/>
              </a>
              <div
                  class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                <ul class="pt-2 pl-2">
                  <li>
                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                       href="#">
                      新建账号
                    </a>
                  </li>
                  <li>
                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                       href="#">
                      渠道账号
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <!--账号管理 end-->

        <!--用户管理 start-->
        <div class="pb-4">
          <span class="inline-block mb-4 text-sm text-slate-400 dark:text-white">用户管理</span>
          <ul class="space-y-1.5">
            <li class="hs-accordion">
              <a class="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white"
                 href="#">
                <icon-notice/>
                <span>登录注册</span>
                <icon-upArrow/>
                <icon-downArrow/>
              </a>
              <div
                  class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                <ul class="pt-2 pl-2">
                  <li>
                    <a class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300"
                       href="#">
                      用户登录
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <!--用户管理 end-->

      </nav>
    </div>
  </div>
</template>
<script lang="ts">
import IconNotice from "@/icon/IconNotice.vue";
import IconUpArrow from "@/icon/IconUpArrow.vue";
import IconDownArrow from "@/icon/IconDownArrow.vue";
import IconRightArrow from "@/icon/IconRightArrow.vue";
import IconBar from "@/icon/IconBar.vue";
import IconHome from "@/icon/IconHome.vue";

export default {
  name: 'sidebar',
  components: {IconHome, IconBar, IconRightArrow, IconDownArrow, IconUpArrow, IconNotice}
}
</script>