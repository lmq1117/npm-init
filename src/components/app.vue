<template>
    <div id="app2">
        <h1>姓名：{{name}}</h1>
        <h2>{{age}}</h2>
    </div>
</template>

<script>
    export default {
        name: app,
        data() {
            return {
                name: 'guowenfh',
                age: '23'
            }
        }
    }
</script>


<style lang="scss">
    $qwe: #098;
    body {
        background-color: $qwe;

        h1 {
            background-color: #eee;
            color: yellowgreen;
            transform: translate(10%, 10%);
        }

        h1:hover {
            height: 100px;
        }

        h2 {
            background-color: #999;
        }
    }
</style>
