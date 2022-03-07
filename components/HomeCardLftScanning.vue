<template>
    <div class="card">
        <!-- If Icon, use it Else use unsplash random image -->
        <div class="img" />
        <div class="card-body">
            <h1> Automatic scanning of Lateral Flow Tests </h1>
            <p>
                I created a game similar to the popular mobile game Angry Birds, but with a banana flavoured twist.
            </p>
            <p>
                <nuxt-link class="action-link" to="/portfolio/lft-scanning">
                    Read more
                </nuxt-link>
            </p>
        </div>
    </div>
</template>

<style scoped>
    .card {
        background: rgb(254, 28, 141);
        background: linear-gradient(0deg, rgb(254, 28, 141) 0%, rgb(252, 100, 176) 47%, rgb(252, 100, 176) 100%); 
        color: white;
    }
    .card .card-body p {
        /* -webkit-text-stroke-width: .5px;
        -webkit-text-stroke-color: rgba(255, 231, 79, 128); */
        font-size: 1rem;
        margin-bottom: 10px;
    }
    .img {
        background-image: url('/images/lft-scanning/test.webp');
        width: 30%;

    }

    .card:hover {
        outline: none;
    }

    a.action-link {
        background: none;
        border-bottom: 4px solid #fff;
        color: #fff;
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

        .logo, h1 {
            margin-bottom: 20px;
        }
        .logo {
            height: 50px;
            width: auto;
            align-self: center;
            margin-bottom: 20px;
        }
    }
</style>
