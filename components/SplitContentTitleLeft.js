export default function SplitContentTitleLeft(props) {
    return (
<section>
  <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
    <div class="max-w-3xl">
      <h2 class="text-3xl font-bold sm:text-4xl">
        {props.h2}
      </h2>
    </div>

    <div class="grid grid-cols-1 gap-8 mt-8 lg:gap-16 lg:grid-cols-2">
      <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          class="absolute inset-0 object-cover w-full h-full"
          src="https://www.hyperui.dev/photos/man-1.jpeg"
          alt="Man using a computer"
        />
      </div>

      <div class="lg:py-16">
        <article class="space-y-4 text-gray-600">
          <p>
            {props.p1}
          </p>

          <p>
            {props.p2}
          </p>
        </article>
      </div>
    </div>
  </div>
</section>

    )
}
