function updateSection(section) {
    if (section == "jeux") {
        document.getElementById("main").innerHTML = '<p><iframe frameborder="0" src="https://itch.io/embed/1296419" width="552" height="167"><a href="https://retromodern.itch.io/antenna">ANTENNA by retromodern</a></iframe></p>';
    }
    else {
        document.getElementById("main").innerHTML = '';
    }
}