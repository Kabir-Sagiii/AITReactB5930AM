import React from "react";

function IntialPage({ getUsers }) {
  // const getData = ()=>{
  //   getUsers()
  // }
  return (
    <div>
      <h2 style={{ color: "green" }}>User Information</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veritatis
        quae voluptatibus corrupti quas delectus reiciendis vitae voluptatem
        ipsam. Nemo hic ad nisi? Sunt sed quisquam pariatur porro corporis
        officia iusto modi rerum quo est, quidem, quam dolorem! Veritatis sed
        mollitia numquam quae omnis repudiandae asperiores accusantium incidunt
        est pariatur sint ratione nesciunt quis obcaecati, deleniti libero, a
        assumenda in, quibusdam perferendis vitae illo dolorum! Officiis atque
        tenetur possimus esse doloremque exercitationem? Maxime recusandae id
        veritatis ut ducimus velit dolor porro neque consequatur atque cumque
        ratione, labore quae, quod est laudantium harum voluptas reiciendis
        commodi aut eveniet excepturi alias magnam doloribus. Sequi, voluptates.
        Beatae libero vitae non sit blanditiis, nulla architecto eaque ipsa
        officia fugit dolorum ipsum! Exercitationem quibusdam tenetur, iste
        voluptate quidem nam dolores soluta rerum. Possimus molestiae error
        quod, non doloribus nesciunt, deserunt veniam maxime exercitationem
        praesentium consequuntur quibusdam aspernatur perspiciatis maiores
        adipisci beatae! Deserunt quod laborum molestias, id dolores perferendis
        facere earum sequi voluptatem harum necessitatibus nam et fuga
        blanditiis nemo distinctio quasi. Similique consequuntur quo dolore
        cupiditate aspernatur voluptatibus eligendi magnam consequatur quia
        doloremque impedit, voluptatem exercitationem quae animi, mollitia iste.
        Deserunt animi blanditiis dolore totam perferendis, laudantium cumque
        illum atque, voluptates quia necessitatibus cupiditate in?
      </p>
      {/* <button onClick={getData}>Get Users</button> */}

      <button
        onClick={() => {
          getUsers();
        }}
      >
        Get Users
      </button>
    </div>
  );
}

export default IntialPage;
