<template>
    <div class="card">
        <div class="card-body">
            <div class="card-body-text">
                <h1> Automatic scanning of Lateral Flow Tests </h1>
                <p>
                    Scanning of a test cartridge to automate both the data collection and abstract the reading of the result.
                </p>
                <p>
                    <nuxt-link class="action-link" to="/portfolio/lft-scanning">
                        Read more
                    </nuxt-link>
                </p>
            </div>
            <div class="img" />
        </div>
    </div>
</template>

<style scoped>
    .card {
        background: #d16ba5;
        background-image: linear-gradient(to left bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #909ae3, #849be5, #779be7, #6d91e6, #6486e5, #5d7be3, #5870e1);
        color: white;
        flex-direction: column-reverse;
    }

    .card-body {
        display: flex;
        justify-content: space-between;
        width: 90%;
    }
    .card .card-body p {
        /* -webkit-text-stroke-width: .5px;
        -webkit-text-stroke-color: rgba(255, 231, 79, 128); */
        font-size: 1rem;
        margin-bottom: 10px;
    }

    .card-body-text {
        width: 100%;
    }

    .img {
        transform: rotate(12deg);
        align-self: flex-end;
        background-image: url('/images/lft-scanning/phone.webp');
        background-position: right center;
        background-size: contain;
        background-repeat: no-repeat;
        opacity: 1;
        mask-image: none;
        margin-right: 0;
        z-index: 2;
        height: 300px;
        display: block;
        position: relative;
        margin: 20px;
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

        .card-body {
            padding: 0;
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
