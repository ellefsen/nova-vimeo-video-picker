Nova.booting((Vue, router, store) => {
    Vue.component('index-nova-vimeo-video-picker', require('./components/IndexField'))
    Vue.component('detail-nova-vimeo-video-picker', require('./components/DetailField'))
    Vue.component('form-nova-vimeo-video-picker', require('./components/FormField'))
})
