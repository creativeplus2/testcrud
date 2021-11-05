<script context="module">
    export const load = async ({ fetch }) => {
      const res = await fetch("https://creativeplusplus.com/api.php/records/posts",
        { 
          method: 'GET',
          headers: { 'X-API-Key' : import.meta.env.VITE_TOKEN},
        }
      );
      const items = await res.json();
      const posts = items.records;
      console.log(posts)
      return {
        props: {
          posts,
        },
      };
    };
  </script>
  
  <script>
    export let posts;
  </script>
  
  <h1>Posts</h1>
  
  <div class="posts">
    {#each posts as item}
      <div class="post">
        <p>{item.id}</p>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
        <p class="link"><a sveltekit:prefetch href={`/update/${item.id}`}>Read More</a></p>
      </div>
    {/each}
  </div>
  
  <style>
    .posts {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }
  
    .post {
      padding: 10px;
      border: 1px solid #ddd;
      box-shadow: 0 0 10px #eee;
    }
  
    h2 {
      margin: 0;
    }
  
    .link {
      text-align: right;
    }
  </style>