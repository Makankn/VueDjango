<template>
    <div class="page-success">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Thank you <span style="color: rgba(72, 199, 142, 0.7);"><i class="fas fa-check-circle"></i></span></h1>

                <p>Your order will be processed within 48 hours</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Success',
    mounted() {
        document.title = 'Success | MadNar'
    },
}
</script>

