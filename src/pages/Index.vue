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
        <div class="w-full my-0 p-4 sm:p-0 h-fullvh sm:h-auto text-black">
          <div class="flex flex-row flex-wrap items-center justify-center content-center h-full sm:h-auto rounded-xl sm:rounded-none sm:shadow-none bg-ctwhite shadow-md font-normal">
            <g-image alt="Portrait" src="~/img/portrait.svg" class="h-2/5 sm:h-auto sm:w-1/3 sm:py-10" style="max-width: 370px"/>
      
            <div class="px-8 pt-10 sm:pt-0">
              <p class="text-2xl">Hi, I'm</p>
              <p class="text-3xl md:text-4xl font-bold font-sans">Raphael Gruber</p>
              <div class="flex flex-row flex-no-wrap items-center justify-between pt-8">
                <p class="text-left text-xl">
                  <a href="https://github.com/rapgru" class="mr-2">
                    <font-awesome :icon="['fab', 'github']"/>
                  </a>
                  <a href="https://www.linkedin.com/in/raphael-gruber-9a6b82193/" class="mr-2">
                    <font-awesome :icon="['fab', 'linkedin']"/>
                  </a>
                  <a href="https://twitter.com/rapgru" class="mr-2">
                    <font-awesome :icon="['fab', 'twitter']"/>
                  </a>
                </p>
                <p class="text-right md:text-lg text-gray-600">Student <br/> Vienna, Austria</p>
              </div>
            </div>
            <div class="text-center mb-8 text-2xl floating sm:hidden absolute bottom-0 w-full">
                <a class="link" href="#work"><font-awesome :icon="['fas', 'chevron-down']"/></a>
            </div>
          </div>
        </div>
        <div class="w-full bg-ctblue h-1 hidden sm:block"></div>
      </template>
  </default-layout>
</template>

<script>
import TimelineEntry from '~/components/TimelineEntry.vue'
import MarkdownBlock from '~/components/MarkdownBlock.vue'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    TimelineEntry,
    MarkdownBlock
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