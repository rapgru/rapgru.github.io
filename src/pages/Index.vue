<template>
  <default-layout>
  
      <div class="mb-10">
        <a id="work"></a>
        <h1>About me</h1>
  
        <p class="text-center">
          I'm a young student and very passionate about computers and mountainbiking.
  
          <!--Feel free to check out my <a class="text-blue-400" href="/blog">blog</a>-->
        </p>
      </div>
      <div class="mb-10">
        <div class="flex flex-row flex-wrap xl:flex-no-wrap align-start justify-center content-start">
          <div>
            <h1>Work experiences</h1>
            <ul class="mt-5 max-w-2xl">
              <timeline-entry
                v-for="item in $page.work.edges"
                :key="item.node.id"
                :link="item.node.link"
                :from="item.node.from"
                :until="item.node.until"
                :school="item.node.employer"
                :title="item.node.job"
                :image="item.node.image">
                <markdown-block :content="item.node.content"/>
              </timeline-entry>
            </ul>
          </div>
    
          <div>
            <h1>Education</h1>
            <ul class="mt-5 max-w-2xl">
              <timeline-entry
                v-for="item in $page.ed.edges"
                :key="item.node.id"
                :link="item.node.link"
                :from="item.node.from"
                :until="item.node.until"
                :school="item.node.school"
                :title="item.node.title">
                <markdown-block :content="item.node.content"/>
              </timeline-entry>
            </ul>
          </div>
        </div>
      </div>

      <template slot="above">
          <vue100vh class="sm:hidden" :css="{height: '100rvh'}">
            <welcome-block/>
          </vue100vh>
          <welcome-block class="hidden sm:block"/>
          <div class="w-full bg-ctblue h-1 hidden sm:block"></div>
      </template>
  </default-layout>
</template>

<script>
import TimelineEntry from '~/components/TimelineEntry.vue'
import MarkdownBlock from '~/components/MarkdownBlock.vue'
import WelcomeBlock from '~/components/WelcomeBlock.vue'
import vue100vh from 'vue-100vh'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    TimelineEntry,
    MarkdownBlock,
    WelcomeBlock,
    vue100vh,
  },
  name: 'index'
}
</script>

<style>
@keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-7px);
	}
	100% {
		transform: translatey(0px);
	}
}

.floating {
  transform: translatey(0px);
	animation: float 4s ease-in-out infinite;
}
</style>

<page-query>
query {
  ed: allEducation {
    edges {
      node {
        id
        from
        until
        school
        title
        link
        content
      }
    }
  },
  work: allWorkExperience(sortBy: "until", order: DESC) {
    edges {
      node {
        id
        from (format: "DD.MM.YYYY")
        until (format: "DD.MM.YYYY")
        employer
        job
        link
        content
        image
      }
    }
  }
}
</page-query>