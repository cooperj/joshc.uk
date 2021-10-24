<template>
    <nuxt-link to="/portfolio">
        <div class="card">
            <!-- If Icon, use it Else use unsplash random image -->
            <div class="img" style="background-image: url('https://source.unsplash.com/300x300/?nature,water,landscape')" />
            <div class="card-body">
                <h1> Card Title </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p>
                    In nibh ligula, convallis ut dolor nec, semper lobortis metus. Maecenas ut risus augue. 
                </p>
                <p>
                    Cras varius nulla nulla, suscipit blandit orci maximus non. Nullam tempor nisi purus, vulputate molestie neque blandit in. Duis luctus erat vel leo sodales, vel varius libero rutrum.
                </p>
                <p>
                    Nam et venenatis tellus. Nulla ut urna euismod, auctor turpis vel, sodales purus. Vestibulum tempor rhoncus dui, sed fermentum leo pellentesque vel. Duis vestibulum erat eu elit vehicula, bibendum placerat neque egestas. Cras quis quam ac mauris eleifend ultricies non congue dui. Aliquam molestie sit amet nisl nec facilisis. Etiam id tortor a sapien finibus tempor posuere a purus. Aenean in pharetra lacus.
                </p>
            </div>
        </div>
    </nuxt-link>
</template>

<style scoped>
    .card {
        background-color: #6E470B;
        color: wheat;
    }
    .card .card-body p {
        font-size: 1rem;
        margin-bottom: 10px;
    }
</style>