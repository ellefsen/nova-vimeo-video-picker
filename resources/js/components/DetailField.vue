<template>
  <div>
    <div class="flex border-b border-40">
      <div class="w-1/4 py-4">
        <h4 class="font-normal text-80">
          Video
        </h4>
      </div>
      <div class="w-3/4 py-4 break-words">
        <p class="text-90">
          {{ field.value.name }}
        </p>
      </div>
      <div class="w-1/4 py-4">
        <h4 class="font-normal text-80">
          Link
        </h4>
      </div>
      <div class="w-3/4 py-4 break-words">
        <p class="text-90">
          {{ field.value.link }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["resource", "resourceName", "resourceId", "field"],
}
</script>
