export default function DispalyAdd({items}) {
    // console.log(items)
    console.log(items.post)
    return (
      <div>
        <h1>channel selected is {items ? items.channel : "none"}</h1>
        <h3>
          {items.channel === "twitter" ? "twitter card" :
            items.channel === "facebook" ? "facebook card" :
            items.channel === "insta" ? "instagram card" : "NO Card"}
        </h3>
      </div>
    );
  }