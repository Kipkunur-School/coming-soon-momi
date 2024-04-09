<template>
  <div class="main-home">
    <div class="cover">
      <img class="logo" src="@/assets/logoo.png" />
    </div>

    <div class="cover">
      <h1>WE'RE COMING SOON!</h1>
      <p>
        We're Coming Soon!! We are building tools for you to learn, explore talents and get
        empowered
      </p>
    </div>

    <div class="cover rows">
      <img
        src="@/assets/facebook.svg"
        onclick="window.open('https://web.facebook.com/momifoundation')"
      />
      <img
        src="@/assets/instagram.svg"
        onclick="window.open( 'https://www.instagram.com/momifoundation')"
      />
      <img
        src="@/assets/twitter.svg"
        onclick="window.open('https://web.facebook.com/momifoundation')"
      />
      <img
        src="@/assets/link.svg"
        onclick="window.open('https://www.linkedin.com/company/momi-foundation')"
      />
    </div>
  </div>
</template>

<style>
img {
  cursor: pointer;
}
p {
  margin: 20px;
  text-align: center;
  width: 50%;
}
h1 {
  /* color: #43bdad; */
  align-items: center;
  display: flex;
  text-decoration: underline;
  text-underline-offset: 10px;
  font-weight: 100;
  justify-items: center;
  margin-left: 50px;
  font-weight: bold;
}
.rows {
  flex-direction: row !important;
  margin-top: 100px;
  gap: 20px;
}
.cover {
  display: flex;
  flex-direction: column;
  color: white;
  font-size: larger;
  align-items: center;
  font-weight: 100;
  justify-content: center;
  justify-items: center;
  margin-left: 50px;
}
.logo {
  height: 50%;
  width: 50%;
  align-items: center;
}
.mom {
  flex-direction: row;
  height: 70px;
  width: 70px;
}
.logs {
  margin-top: 10px;
  align-items: center;
  justify-content: center;
}
</style>
