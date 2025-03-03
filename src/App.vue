<template>
  <div id="app">
    <nav class="nav-bar">
      <router-link to="/" class="nav-link">Home</router-link> 
      <router-link to="/rsvps" class="nav-link">Guest List </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
<style>
/* Navigation Bar */
.nav-bar {
  display: flex;
  justify-content: center; /* Centers links */
  align-items: center;
  background-color: #1b2340; /* Dark navy */
  padding: 15px;
  gap: 15px;
  font-family: 'Montserrat', sans-serif;
}

/* Links */
.nav-link {
  color: #e1b97e; /* Gold */
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

/* Hover & Active Effect */
.nav-link:hover {
  background-color: #e1b97e;
  color: #1b2340;
}

/* Active Page Link */
.router-link-active {
  border-bottom: 2px solid #e1b97e; /* Underline active link */
}

/* Divider (||) Styling */
.divider {
  color: #e1b97e;
  font-size: 18px;
}
</style>