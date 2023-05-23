document.addEventListener('DOMContentLoaded', () => {
    updatePosts();
});

async function updatePosts() {
    let promise = fetch('http://localhost:3000/api/all');
    let response = await promise;
    let posts = await response.json();
    let data = JSON.parse(posts);
    
    let postElements = '';
    data.forEach((post) => {
        let postElement = `<div id="${post.id}" class="card mb-4">
        <div class="card-header">
            <h5 class="card-title">${post.title}</h5>
        </div>
        <div class="card-body">
            <div class="card-text">
                ${post.description}
            </div>
        </div>
    </div>`;
        postElements += postElement;
    });

    document.getElementById('posts').innerHTML = postElements;
}

function newPost() {
    let title = document.getElementById('title').value;
    let description = document.getElementById('desc').value;

    
    let post = {title, description};
    //console.log(post);return false;

    const options = {
        method:'POST',headers: new Headers({'content-type':'application/json'}),
        body: JSON.stringify(post)
    }

    fetch('http://localhost:3000/api/new', options );
    updatePosts() ;
    document.getElementById('title').value ='';
    document.getElementById('desc').value ='';

}