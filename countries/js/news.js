const main = document.querySelector('main');
const url="PHP/news.php"

window.addEventListener('load', () =>{
    getNews();
});


function getNews(){
    fetch('PHP/news.php')
    .then(function(response){
        return response.json()
    })
    .then(data=> news.innerHTML=data.articles.map(createArticle).join('\n'));
}

const createArticle= article=>{
    return`
    <div class="card text-white bg-primary mb-3" style="max-width: 30rem;">
    <div class="card-header">${article.title}</div>
    <div class="card-body">
      <img src="${article.urlToImage}">
      <p class="card-text">${article.description}</p>
      <a href=${article.url} target="_blank">
    </div>
  </div>
    `;
}