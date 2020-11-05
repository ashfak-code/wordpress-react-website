import React, { Component } from "react";
import axios from "axios";
import { Link, BrowserRouter as Router } from "react-router-dom";
class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      page: 1,
      load: true,
      perPage: 24,
      pageCount: 0,
      dividePost: 6,
      numberOfPosts:0
    };
    this.createMarkup = this.createMarkup.bind();
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.allPost = [];
    axios
      .get(
        `https://pwa.captainweb.in/wp-json/wp/v2/posts?_embed&per_page=${this.state.perPage}&page=1`
      )
      .then((posts) => {
        this.allPost = posts.data;
        this.fewPost = [];
        this.counter = 0;
        for (let i = this.state.pageCount; i < this.state.dividePost; i++) {
          this.fewPost.push(posts.data[this.counter]);
          this.counter++;
        }
        this.setState({
          posts: this.fewPost,
          page: this.state.page + 1,
          pageCount: this.state.pageCount + 6,
          numberOfPosts: this.state.numberOfPosts + this.state.perPage
        });
      });
    window.addEventListener("scroll", this.loadMore);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.loadMore);
  }

  componentDidUpdate(prevState, prevProps) {
    /* this.allPost[0] = ['asdasd']; */
    /* this.setState({posts : [...prevProps.posts, ...this.state.newPosts]}); */
  }

  loadMore() {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    //const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const docHeight = body.scrollHeight;
    const windowBottom = Math.ceil(windowHeight + window.pageYOffset);
    if (windowBottom == docHeight && this.state.load) {


      /* 
      CHeck if Page Count is 24 if 24 then display 6 posts from new api call else
      show +6 post from the stored data.
      */

      if(this.state.pageCount === this.state.numberOfPosts ){
        this.setState({ load: false });
        axios
        .get(
          `https://pwa.captainweb.in/wp-json/wp/v2/posts?_embed&per_page=${this.state.perPage}&page=${this.state.page}`
          )
          .then((posts) => {
            
            this.allPost.push(...posts.data);
            console.log(posts.data.length);
            this.counter = 0;
            
            for (let i = 0; i < this.state.dividePost; i++) {
              this.fewPost.push(posts.data[this.counter]);
              console.log(posts.data[this.counter]);
              this.counter++;
            }
            
          console.log("PAGE COUNT BEFORE");
          console.log(this.state.pageCount);
          this.setState({
            posts: this.fewPost,
            page: this.state.page + 1,
            pageCount: this.state.pageCount + 6,
            numberOfPosts: this.state.numberOfPosts + this.state.perPage,
            load: true
          });
          console.log("PAGE COUNT AFTER");
          console.log(this.state.pageCount);
        }).catch(() => {
          this.setState({ load: true });
          window.removeEventListener("scroll", this.loadMore);
        });
      }else{
        if( this.state.pageCount < this.allPost.length){
          for (let i = this.state.pageCount; i < this.state.pageCount + 6; i++) {
            if(this.allPost[i] != undefined || this.allPost[i] != null){
              this.fewPost.push(this.allPost[i]);
            }
            else{
              this.setState({ load: false });
              console.log("END OF POSTS");
              window.removeEventListener("scroll", this.loadMore);
            }
          }
          this.setState({ load: true, pageCount: this.state.pageCount + 6 });
          console.log(this.state.pageCount);
        }
      }
    }
  }
  createMarkup(html) {
    return { __html: html };
  }

  render() {
    return (
      <>
          <div className="post__list__div">
            {
            this.state.posts.map((post) => (
        
              <Link className="card__block" to={`/${post.slug}`} key={post.id}>
              
                <div className="card" key={post.id}>
                <div className="card-content">
                <h3 className="card__title">{post.title.rendered}</h3>
                {post.featured_media === 0 ? (
                  <img
                      className="card__image"
                      src="https://via.placeholder.com/500x230"
                      alt="NOT FOUND"
                      />
                      ) : (
                        <img
                        className="card__image"
                          src={post._embedded["wp:featuredmedia"]["0"].source_url}
                          alt={post.title.rendered}
                          />
                          )}
                          <div
                      className="card__excerpt"
                      dangerouslySetInnerHTML={this.createMarkup(
                        post.excerpt.rendered.substring(0, 120)
                        )}
                        />
                        <span className="read__more">read more</span>
                        </div>
                        </div>
                        </Link>
                        ))}

            <div className={!this.state.load ? "display__load" : "hide__load"}>
              <h4>Loading...</h4>
            </div>
          </div>

      </>
    );
  }
}

export default PostList;
