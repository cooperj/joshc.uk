var map;

function initMap() {
    var Location = { lat: 51.501364, lng: -0.1440787 };

    map = new google.maps.Map(document.getElementById("hero_contact"), {
        center: Location,
        zoom: 15,
        disableDefaultUI: true

    });

    var marker = new google.maps.Marker({
        position: Location,
        map: map,
        title: 'Contineo World Headquarters',
        animation: google.maps.Animation.DROP
    });

    marker.addListener('click', toggleBounce);

    marker.setMap(map);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}