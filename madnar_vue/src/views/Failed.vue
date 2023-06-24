<template>
    <div class="page-success">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Some Problem Occurred <span style="color: #e00000;"><i class="fas fa-times-circle"></i></span></h1>
                
                <p>I'm sorry, your order cannot be processed. Please send a ticket to our support team!</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Failed',
    mounted() {
        document.title = 'Failed | MadNar'
    },
}
</script>
