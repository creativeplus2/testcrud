<script context="module">

    export const load = async ({ page, fetch }) => {
    const id = page.params.update;
    const res = await fetch(`https://creativeplusplus.com/api.php/records/posts/${id}`,
        {
            method: 'GET',
            headers: {
                'X-API-Key' : import.meta.env.VITE_TOKEN
            }
        }
    );
    const posts = await res.json();
    const post = posts

    return {
        props: {
            post,
            id
        },
    };
};
</script>

<script>
    export let post, id;
    async function submitForm() {
        const submit = await fetch(`https://creativeplusplus.com/api.php/records/posts/${id}`, {
            method: 'PUT',
            headers: { 'X-API-Key' : import.meta.env.VITE_TOKEN},
            body: JSON.stringify(post),
        })
        console.log(JSON.stringify(post))
        const data = await submit.json()
        console.log(data)

    }
</script>

<form on:submit|preventDefault={submitForm}>

<input type="text" bind:value={post.title} placeholder="book description"/>
<input type="text" bind:value={post.content} placeholder="book description"/>
<input type="submit" />
</form>