<template>
  <div class="rsvp-list container">
    <h2 class="text-center">Guest List</h2>
    
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="rsvps.length === 0" class="no-rsvp">No RSVPs yet.</div>
    
    <ul v-else class="guest-list">
      <li v-for="rsvp in rsvps" :key="rsvp.id" class="guest-item">
        <span class="guest-name">{{ rsvp.name }}</span> - 
        <span class="guest-count">{{ rsvp.numPeople }} people</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from "@/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      rsvps: [],
      loading: true
    };
  },
  async mounted() {
    await this.fetchRSVPs();
  },
  methods: {
    async fetchRSVPs() {
      try {
        const q = query(collection(db, "rsvps"), where("attending", "==", true));
        const querySnapshot = await getDocs(q);
        
        this.rsvps = querySnapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
          numPeople: doc.data().numPeople
        }));
      } catch (error) {
        console.error("Error fetching RSVPs:", error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style>
.rsvp-list {
  max-width: 600px;
  margin: 20px auto;
  background: #1b2340;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #e1b97e;
}

h2 {
  font-family: 'Playfair Display', serif;
  text-align: center;
}

.loading,
.no-rsvp {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #ccc;
}

.guest-list {
  list-style: none;
  padding: 0;
}

.guest-item {
  padding: 10px;
  border-bottom: 1px solid #444;
}

.guest-name {
  font-weight: bold;
}

.guest-count {
  font-style: italic;
}
</style>