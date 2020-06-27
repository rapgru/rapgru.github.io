<template>
  <div class="w-full my-0 font-sans leading-tight h-full p-4 sm:p-0"> 
    <div class="flex flex-row flex-wrap items-center justify-center content-center h-full sm:h-auto rounded-xl sm:rounded-rounded-none sm:shadow-none bg-white shadow-md font-normal">
      <g-image alt="Portrait" src="~/img/photo_test_2.svg" class="h-2/5 sm:h-auto sm:w-1/3 sm:py-10" style="max-width: 370px"/>

      <div class="px-8 pt-10 sm:pt-0">
        <p class="text-2xl">Hi, I'm</p>
        <p class="text-3xl md:text-4xl font-bold">Raphael Gruber</p>
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
          <a href="#work"><font-awesome :icon="['fas', 'chevron-down']"/></a>
      </div>
    </div>

    <div class="px-5 sm:px-10 md:px-20 lg:px-30 mb-10">
      <a id="work"></a>
      <h1 class="h1 text-center mb-3">About me</h1>

      <p class="text-center ">
        I'm a young student and very passionate about 
        <span class="text-xl">&#x1F4BB;</span> and 
        <span class="text-xl">&#128693;</span>.

        <!--Feel free to check out my <a class="text-blue-400" href="/blog">blog</a>-->
      </p>

      <h1 class="h1 text-center">Work experiences</h1>

      <Timeline class="mt-5 mx-auto max-w-3xl">
        <TimelineEntry link="https://viridiansoftware.com" image="viridian-software.png" from="02/09/2019" to="27/09/2019" school="Viridian Software Ltd., Dublin" title="Software Developer">
          <p class="text-base">
            Viridian Software is a indie game studio based in Dublin, Ireland. I feel very 
            grateful to having had the chance of completed an Erasmus+ internship in this company. 
            During my time in Ireland, I greatly improved my software engineering skills by working 
            on a real project and made many pleasurable ever-lasting memories.
          </p>
        </TimelineEntry>
        <TimelineEntry link="https://www.frequentis.com" image="frequentis.jpg" from="03/07/2017" to="01/08/2017" school="Frequentis AG, Vienna" title="Temporary Trainee">
          <p class="text-base">
            Frequentis is an Austrian high-tech company that develops 
            communication and information systems in fields such as 
            air traffic management and public safety & transport.
          </p>
        </TimelineEntry>
        <TimelineEntry link="https://www.frequentis.com" image="frequentis.jpg" from="03/07/2017" to="01/08/2017" school="Frequentis AG, Vienna" title="Temporary Trainee">

        </TimelineEntry>
        <TimelineEntry link="https://www.frequentis.com" image="frequentis.jpg" from="03/07/2017" to="01/08/2017" school="Frequentis AG" title="Software Tester">

        </TimelineEntry>
      </Timeline>
      <h1 class="h1 text-center">Education</h1>
      <Timeline class="mt-5 mx-auto max-w-3xl">
        <TimelineEntry link="http://www.sz-ybbs.ac.at/~sz-ybbs/news/aktuell/" from="2016" to="today" school="IT-HTL Ybbs" title="secondary school">
          <p class="text-base">
            An HTL is a secondary education school that permits students to acquire the university 
            entry qualification and professional training at the same time. The IT-HTL provides 
            common knowledge as well as specialised skills in the field of information technology.
          </p>
          <h3 class="my-3 font-bold">Technical topics</h3>
          <p>          
            <ul class="list-disc list-inside">
              <li>network engineering</li>
              <li>software development</li>
              <li>media technology</li>
              <li>principles of</li>
              <ul class="list-disc list-inside ml-4">
                <li>operating systems</li>
                <li>computer science</li>
                <li>elecronic engineering</li>
              </ul>
            </ul>
          </p>
        </TimelineEntry>
      </Timeline>
    </div>
  </div>
</template>

<script>
import Timeline from '~/components/Timeline.vue'
import TimelineEntry from '~/components/TimelineEntry.vue'

export default {
  metaInfo: {
    title: 'Raphael Gruber'
  },
  components: {
    Timeline,
    TimelineEntry
  }
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

html, body {
  height: 100%;
  @apply bg-background;
  scroll-behavior: smooth;
}

.h1 {
  @apply text-2xl;
  @apply mt-10
}
</style>
