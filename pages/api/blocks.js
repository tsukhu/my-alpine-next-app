// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  const data = [
    {
      id: 1,
      contentHTML: `<h1 class="bg-blue-500 text-white text-2xl text-center rounded p-2">Hello Static</h1>`,
      ssr: true
    },
    {
      id: 2,
      contentHTML: `<div x-data="{ open: false }" class="m-2 p-2" >
      <button @click="open = !open" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Expand</button>
      
      <span x-show="open" class="text-gray-700 text-lg mx-2">
        Content...
      </span>
      </div>`,
      ssr: false
    }, {
      id: 3,
      contentHTML: `<div
      x-data="
          {
              open: false
          }
      "
      class="relative"
      >
      
          <!-- Trigger element -->
          <button 
          @mouseover="open = true" @mouseleave="open = false"
          class="bg-gray-400 text-gray-600 text-sm px-4 py-2 rounded hover:bg-gray-500 hover:text-gray-800 transition duration-150 shadow-sm">
              Hover to reveal all
          </button>
      
          <!-- Popover -->
          <!-- Make sure to add the requisite CSS for x-cloak: https://github.com/alpinejs/alpine#x-cloak -->
      
          <div 
          x-cloak
          x-show.transition="open"
          id="popover"
          class="p-3 space-y-1 max-w-xl bg-white rounded shadow-2xl flex flex-col text-sm text-gray-600 mt-3 absolute z-20">
              <strong class="text-sm text-gray-800 font-semibold">What is this about?</strong>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa laborum incidunt debitis necessitatibus veritatis.</p>
          </div>
          
      </div>
      
      <!-- CSS for the arrow pseudoelement, not possible natively with Tailwind. Probably move this to your stylesheets. If you can find a Tailwind solution, please let me know! -->
      <style>
          #popover:before{
              content: "";
              position: absolute;
              bottom: 100%;
              left: 5%;
              margin-left: -10px;
              border-width: 7px;
              border-style: solid;
              border-color: transparent transparent lightgray transparent;
          }
      </style>`,
      ssr: false
    },

    {
      id: 4,
      contentHTML: `<div class="bg-teal-100 h-screen flex flex-col justify-center items-center">
  
      <div 
        class="max-w-4xl mx-auto relative"
        x-data="{ activeSlide: 1, slides: [1, 2, 3, 4, 5] }"
       >
        <!-- Slides -->
        <template x-for="slide in slides" :key="slide">
          <div
             x-show="activeSlide === slide"
             class="p-24 font-bold text-5xl h-64 flex items-center bg-teal-500 text-white rounded-lg">
            <span class="w-12 text-center" x-text="slide"></span>
            <span class="text-teal-300">/</span>
            <span class="w-12 text-center" x-text="slides.length"></span>
          </div>
        </template>
        
        <!-- Prev/Next Arrows -->
        <div class="absolute inset-0 flex">
          <div class="flex items-center justify-start w-1/2">
            <button 
              class="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-12 h-12 -ml-6"
              x-on:click="activeSlide = activeSlide === 1 ? slides.length : activeSlide - 1">
              &#8592;
             </button>
          </div>
          <div class="flex items-center justify-end w-1/2">
            <button 
              class="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow rounded-full w-12 h-12 -mr-6"
              x-on:click="activeSlide = activeSlide === slides.length ? 1 : activeSlide + 1">
              &#8594;
            </button>
          </div>        
        </div>
    
        <!-- Buttons -->
        <div class="absolute w-full flex items-center justify-center px-4">
          <template x-for="slide in slides" :key="slide">
            <button
              class="flex-1 w-4 h-2 mt-4 mx-2 mb-0 rounded-full overflow-hidden transition-colors duration-200 ease-out hover:bg-teal-600 hover:shadow-lg"
              :class="{ 
                  'bg-orange-600': activeSlide === slide,
                  'bg-teal-300': activeSlide !== slide 
              }" 
              x-on:click="activeSlide = slide"
            ></button>
          </template>
        </div>
      </div>
      
      </div>
    </div>`,
      ssr: false
    },{
      id: 5,
      contentHTML: `<div class="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
  
          <!-- Column -->
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
  
              <!-- Article -->
              <article class="overflow-hidden rounded-lg shadow-lg">
  
                  <a href="#">
                      <img alt="Placeholder" class="block h-auto w-full" src="https://placeimg.com/600/400/any">
                  </a>
  
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 class="text-lg">
                          <a class="no-underline hover:underline text-black" href="#">
                              Article Title
                          </a>
                      </h1>
                      <p class="text-grey-darker text-sm">
                          11/1/19
                      </p>
                  </header>
  
                  <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                      <a class="flex items-center no-underline hover:underline text-black" href="#">
                          <img alt="Placeholder" class="block rounded-full" src="https://placeimg.com/32/32/any">
                          <p class="ml-2 text-sm">
                              Author Name
                          </p>
                      </a>
                      <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                          <span class="hidden">Like</span>
                          <i class="fa fa-heart"></i>
                      </a>
                  </footer>
  
              </article>
              <!-- END Article -->
  
          </div>
          <!-- END Column -->
  
          <!-- Column -->
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
  
              <!-- Article -->
              <article class="overflow-hidden rounded-lg shadow-lg">
  
                  <a href="#">
                      <img alt="Placeholder" class="block h-auto w-full" src="https://placeimg.com/600/400/any">
                  </a>
  
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 class="text-lg">
                          <a class="no-underline hover:underline text-black" href="#">
                              Article Title
                          </a>
                      </h1>
                      <p class="text-grey-darker text-sm">
                          11/1/19
                      </p>
                  </header>
  
                  <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                      <a class="flex items-center no-underline hover:underline text-black" href="#">
                          <img alt="Placeholder" class="block rounded-full" src="https://placeimg.com/32/32/any">
                          <p class="ml-2 text-sm">
                              Author Name
                          </p>
                      </a>
                      <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                          <span class="hidden">Like</span>
                          <i class="fa fa-heart"></i>
                      </a>
                  </footer>
  
              </article>
              <!-- END Article -->
  
          </div>
          <!-- END Column -->
  
          <!-- Column -->
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
  
              <!-- Article -->
              <article class="overflow-hidden rounded-lg shadow-lg">
  
                  <a href="#">
                      <img alt="Placeholder" class="block h-auto w-full" src="https://placeimg.com/600/400/any">
                  </a>
  
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 class="text-lg">
                          <a class="no-underline hover:underline text-black" href="#">
                              Article Title
                          </a>
                      </h1>
                      <p class="text-grey-darker text-sm">
                          11/1/19
                      </p>
                  </header>
  
                  <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                      <a class="flex items-center no-underline hover:underline text-black" href="#">
                          <img alt="Placeholder" class="block rounded-full" src="https://placeimg.com/32/32/any">
                          <p class="ml-2 text-sm">
                              Author Name
                          </p>
                      </a>
                      <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                          <span class="hidden">Like</span>
                          <i class="fa fa-heart"></i>
                      </a>
                  </footer>
  
              </article>
              <!-- END Article -->
  
          </div>
          <!-- END Column -->
  
          <!-- Column -->
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
  
              <!-- Article -->
              <article class="overflow-hidden rounded-lg shadow-lg">
  
                  <a href="#">
                      <img alt="Placeholder" class="block h-auto w-full" src="https://placeimg.com/600/400/any">
                  </a>
  
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 class="text-lg">
                          <a class="no-underline hover:underline text-black" href="#">
                              Article Title
                          </a>
                      </h1>
                      <p class="text-grey-darker text-sm">
                          11/1/19
                      </p>
                  </header>
  
                  <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                      <a class="flex items-center no-underline hover:underline text-black" href="#">
                          <img alt="Placeholder" class="block rounded-full" src="https://placeimg.com/32/32/any">
                          <p class="ml-2 text-sm">
                              Author Name
                          </p>
                      </a>
                      <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                          <span class="hidden">Like</span>
                          <i class="fa fa-heart"></i>
                      </a>
                  </footer>
  
              </article>
              <!-- END Article -->
  
          </div>
          <!-- END Column -->
  
          <!-- Column -->
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
  
              <!-- Article -->
              <article class="overflow-hidden rounded-lg shadow-lg">
  
                  <a href="#">
                      <img alt="Placeholder" class="block h-auto w-full" src="https://placeimg.com/600/400/any">
                  </a>
  
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 class="text-lg">
                          <a class="no-underline hover:underline text-black" href="#">
                              Article Title
                          </a>
                      </h1>
                      <p class="text-grey-darker text-sm">
                          11/1/19
                      </p>
                  </header>
  
                  <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                      <a class="flex items-center no-underline hover:underline text-black" href="#">
                          <img alt="Placeholder" class="block rounded-full" src="https://placeimg.com/32/32/any">
                          <p class="ml-2 text-sm">
                              Author Name
                          </p>
                      </a>
                      <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                          <span class="hidden">Like</span>
                          <i class="fa fa-heart"></i>
                      </a>
                  </footer>
  
              </article>
              <!-- END Article -->
  
          </div>
          <!-- END Column -->
  
          <!-- Column -->
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
  
              <!-- Article -->
              <article class="overflow-hidden rounded-lg shadow-lg">
  
                  <a href="#">
                      <img alt="Placeholder" class="block h-auto w-full" src="https://placeimg.com/600/400/any">
                  </a>
  
                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 class="text-lg">
                          <a class="no-underline hover:underline text-black" href="#">
                              Article Title
                          </a>
                      </h1>
                      <p class="text-grey-darker text-sm">
                          11/1/19
                      </p>
                  </header>
  
                  <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                      <a class="flex items-center no-underline hover:underline text-black" href="#">
                          <img alt="Placeholder" class="block rounded-full" src="https://placeimg.com/32/32/any">
                          <p class="ml-2 text-sm">
                              Author Name
                          </p>
                      </a>
                      <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                          <span class="hidden">Like</span>
                          <i class="fa fa-heart"></i>
                      </a>
                  </footer>
  
              </article>
              <!-- END Article -->
  
          </div>
          <!-- END Column -->
  
      </div>
  </div>`
  ,
  ssr: true
    }
  ]
  res.status(200).json(data);
}
