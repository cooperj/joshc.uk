<template>
    <div class="card">
        <div class="img"></div>
        <div class="card-body">
            <h1> Aquanaut </h1>
            <p>
                A classic inspired first-person shooter, set in the depths of the ocean. Created as a part of a team.
            </p>
            <p>
                <nuxt-link class="action-link" to="/portfolio/aquanaut">
                    Play now!
                </nuxt-link>
            </p>
        </div>
    </div>
</template>

<style scoped>
    .card {
        background: rgb(29, 73, 138);
        background: linear-gradient(0deg, rgb(29, 73, 138) 0%, rgb(21, 45, 109) 47%, rgb(19, 24, 102) 100%); 
        color: white;
    }
    .card .card-body {
        text-align: right;
    }

    .card .card-body p {
        font-size: 1rem;
        margin-bottom: 10px;
    }
    .img {
        background-image: url('/images/aquanaut/icon.webp');
        width: 45%;
        background-size: cover;

    }

    .card:hover {
        outline: none;
    }

    a.action-link {
        background: none;
        border-bottom: 4px solid white;
        color: white;
    }

    a.action-link:hover {
        background: none;
        border: none
    }

    /* Small Devices */
    @media screen and (max-width: 768px) {
        .card-body {
            display: flex;
            flex-direction: column;
        }
    }
</style>
