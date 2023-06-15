window.onload = () => {
    const btnAddPost = document.getElementById('add-post');
    btnAddPost.onclick = addPost;
    loadPosts();
  
    document.addEventListener('click', function(event) {
      if (event.target.classList.contains('btn-like')) {
        const postId = event.target.closest('.post').id;
        updateLike(postId);
      }
  
      if (event.target.classList.contains('btn-trash')) {
        const postId = event.target.closest('.post').id;
        deletePost(postId);
      }
    });
}
  

async function addPost() { // cria a requisição (método)

    const newPost = {
        "title": document.getElementById('post-tile').value,
        "text": document.getElementById('post-text').value,
        "likes": 0
    }

    const config = {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    }

    const response = await fetch('http://localhost:3000/posts', config)
    const post = await response.json()
    
    appendPost(post)
}


appendPost = (post) => { // add postagem ao html
    const template = document.getElementById('post-template')
    const postElement = document.importNode(template.content, true)

    const postTitle = postElement.querySelectorAll('h3')[0]
    postTitle.innerText = post.title

    const postDate = postElement.querySelectorAll('span')[0];
    const formattedDate = moment(post.date).format("DD [de] MMMM [de] YYYY");
    postDate.innerText = formattedDate;
    
    const postArticle = postElement.querySelectorAll('article')[0]
    postArticle.setAttribute('id', post.id)

    const postItens = postElement.querySelectorAll('p')
    postItens[0].innerText = post.text
    postItens[1].innerText = post.likes + " like(s)"

    const commentsList = postElement.querySelector('.comments-list');

    const loadComments = async () => {
        const response = await fetch(`http://localhost:3000/posts/${post.id}/comments`);
        const comments = await response.json();

        comments.forEach((comment) => {
            const commentItem = document.createElement('li');
            commentItem.innerText = comment.content;
            commentsList.appendChild(commentItem);
        });
    };
    
    loadComments()

    document.getElementById('timeline').append(postElement)
}


/** Pega do "banco" e carrega as postagens de novo */
const loadPosts = async () => {
  const response = await fetch('http://localhost:3000/posts');
  const posts = await response.json();

  posts.forEach(async (post) => {
    appendPost(post)
  });
};


async function updateLike(postId) {
    const response = await fetch(`http://localhost:3000/posts/${postId}/like`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const updatedPost = await response.json();
  
    const postElement = document.getElementById(postId);
    const likesElement = postElement.querySelectorAll('p');
    likesElement[1].innerText = updatedPost.likes + ' like(s)';
}
  

async function deletePost(postId) {
    const confirmed = confirm('Deseja realmente excluir este post?');
  
    if (!confirmed) {
      return;
    }
  
    const response = await fetch(`http://localhost:3000/posts/${postId}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      const postElement = document.getElementById(postId);
      postElement.remove();
    } else {
      console.error('Failed to delete post.');
    }
  }