import Layout from "@components/Layout";
import matter from "gray-matter";
import styled from "styled-components";
import moment from "moment";
import Link from "next/link";

const CategoryList = styled.div`
  a {
    text-decoration: none;
    color: black;
  }

  h3 {
    color: black;
    font-size: 16px;
  }
  h2 {
    font-size: 24px;
    border-bottom: 4px solid #ededed;
    margin-top: 40px;
    margin-bottom: 5px;
    padding-bottom: 5px;
    text-transform: capitalize;
    color: black;
  }

  .post {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 10px;
    border-radius: 5px;
    justify-content: space-between;
    &:hover {
      cursor: pointer;
      background: rgba(0, 0, 0, 0.03);
    }
  }

  .date-created {
    color: #858b93;
    font-size: 0.85rem;
    white-space: nowrap;
    font-weight: 400;
    margin-right: 20px;
  }

  .meta-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .tag {
    font-size: 11px;
    border-radius: 5px;
    padding: 5px;
    color: rgba(0, 0, 0, 0.7);
    text-transform: lowercase;
    background: rgba(0, 0, 0, 0.05);
  }
`;
const Posts = ({ title, description, posts = [], ...props }) => {
  // get lists of post
  // split it by tags
  // 2 column grid!
  // predefined categories
  const categories = ["TECH", "DOG", "PERSONAL"];
  const categoryMap = new Map();

  // sort
  posts.forEach((post) => {
    categories.forEach((category) => {
      if (post?.frontmatter?.tags?.includes(category)) {
        if (categoryMap.has(category)) {
          const list = categoryMap.get(category);
          list.push(post);
          categoryMap.set(category, list);
        } else {
          categoryMap.set(category, [post]);
        }
      }
    });
  });

  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <h1 className="title">Posts</h1>

        <p className="description">{description}</p>

        {categories.map((category) => {
          return (
            <CategoryList key={category}>
              <h2> {category?.toLowerCase()}</h2>

              {categoryMap?.get(category)?.map((post, i) => {
                return (
                  <Link href={`/post/${post.slug}`}>
                    <a>
                      <div className="post" key={post.slug}>
                        <div className="meta-container">
                          <p className="date-created">
                            {moment(post.frontmatter.dateCreated).format(
                              "MMM DD"
                            )}
                          </p>
                          <h3> {post.frontmatter.title} </h3>
                        </div>
                        <div className="meta-container">
                          {post.frontmatter.tags.map((tag) => {
                            if (tag === category) return;
                            return <div className="tag">{tag}</div>;
                          })}
                        </div>
                      </div>
                    </a>
                  </Link>
                );
              })}
            </CategoryList>
          );
        })}
      </Layout>
    </>
  );
};

export default Posts;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../posts", true, /\.md$/));
  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
