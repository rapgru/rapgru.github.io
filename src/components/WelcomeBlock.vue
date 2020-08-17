<template>
    <div class="w-full my-0 p-4 sm:p-0 h-full sm:h-auto text-black">
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
</template>

<script>
export default {
  name: 'welcome-block'
}
</script>

<style>

</style>