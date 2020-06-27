<template>
  <div class="w-screen my-0 px-5 font-sans leading-tight">
    <div class="flex flex-row flex-wrap items-center justify-center content-center h-screen sm:h-auto">
      <g-image alt="Portrait" src="~/img/photo_test_2.svg" class="w-64 sm:py-10" /> <!-- w-64 -->

      <div class="px-8 pt-10 sm:pt-0">
        <p class="text-2xl">Hi, I'm</p>
        <p class="text-3xl md:text-4xl font-bold">Raphael Gruber</p>
        <div class="flex flex-row flex-wrap items-center justify-between pt-8">
          <p class="text-left text-xl">
            <a href="https://github.com/rapgru" class="mr-2">
              <font-awesome :icon="['fab', 'github']"/>
            </a>
            <a href="https://www.linkedin.com/in/raphael-gruber-9a6b82193/" class="mr-2">
              <font-awesome :icon="['fab', 'linkedin']"/>
            </a>
            <a href="https://twitter.com/rapgru">
              <font-awesome :icon="['fab', 'twitter']"/>
            </a>
          </p>
          <p class="text-right md:text-lg text-gray-600">Student <br/> Vienna, Austria</p>
        </div>
      </div>
      <div class="text-center mb-5 text-2xl floating sm:hidden absolute bottom-0 w-full">
          <font-awesome :icon="['fas', 'chevron-down']"/>
      </div>
    </div>
    
    <!-- <button class="fixed right-0 bottom-0 bg-orange-primary w-20 h-6 rounded-full mb-8 mr-8 leading normal">Blog</button> -->
    <!-- <h1 class="text-xl mt-20"><g-image alt="Portrait" src="~/img/round_thingy_flat.svg" class="w-3 inline mr-2"/>Education</h1>
    <ul>
      <li>A</li>
      <li>B</li>
      <li>C</li>
      <li>D</li>
      <li>E</li>
    </ul>
    <h1 class="text-xl"><g-image alt="Portrait" src="~/img/round_thingy_flat.svg" class="w-3 inline mr-2"/>Work Experiences</h1> -->
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Raphael Gruber'
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

body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

html {
  min-height: -webkit-fill-available;
}
</style>
