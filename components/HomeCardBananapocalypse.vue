<template>
    <div class="card">
        <!-- If Icon, use it Else use unsplash random image -->
        <div class="img" />
        <div class="card-body">
            <!-- <h1> Bananapocalypse </h1> -->
            <img class="logo" src="/assets/images/ba/logo.webp" alt="banana apocalypse" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p>
                <nuxt-link class="action-link" to="/portfolio/bananapocalypse">
                    Read more
                </nuxt-link>
            </p>
        </div>
    </div>
</template>

<style scoped>
    .card {
        background: rgb(130,245,255);
        background: linear-gradient(0deg, rgba(130,245,255,1) 0%, rgba(151,200,251,1) 47%, rgba(130,192,255,1) 100%); 
        color: white;
    }
    .card .card-body p {
        -webkit-text-stroke-width: .5px;
        -webkit-text-stroke-color: rgba(255, 231, 79, 128);
        font-size: 1rem;
        margin-bottom: 10px;
    }
    .img {
        background-image: url('/assets/images/ba/home.webp');
        width: 30%;

    }

    .card:hover {
        outline: none;
    }

    a.action-link {
        background: none;
        border-bottom: 4px solid #23951a;
        color: #23951a;
        -webkit-text-stroke-width: 0;
    }

    a.action-link:hover {
        background: none;
        border-bottom: none
    }

    /* Large Devices */
    @media screen and (min-width: 768px) {
        .logo {
            width: auto;
            height: 100px;
        }
    }

    /* Small Devices */
    @media screen and (max-width: 768px) {
        .card-body {
            display: flex;
            flex-direction: column;
        }

        .logo {
            height: 50px;
            width: auto;
            align-self: center;
            margin-bottom: 20px;
        }
    }
</style>
