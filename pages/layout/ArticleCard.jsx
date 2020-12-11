
export default function ArticleCard(props) {
  
  return (
    <div>
      <div>
        <div className="articleCard card text-center mx-5">
            <div className="card-header">
              <h4>{props.articleName}</h4>
              <span>{props.blogType}</span>
            </div>
            <p className="card-body"></p>
            <a href="" className="card-footer">Read article</a>
        </div>
      </div>
  
        <style jsx global>{`
          .articleCard{
            width: 200px;
          }
        `}</style>
  
      </div>
    )
  }