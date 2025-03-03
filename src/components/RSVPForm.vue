<template>
  <div class="rsvp-overlay">
    <div class="rsvp-form container p-4 rounded">
      <button class="close-button" @click="$emit('close')">&times;</button>

      <h2 class="text-center">RSVP </h2>

       <form v-if="!successMessage" @submit.prevent="submitRSVP">
        
            <div class="mb-3">
              <label class="form-label">Your Name</label>
              <input v-model="name" type="text" class="form-control" required />
            </div>
            
            <div class="mb-3">
              <label class="form-label">RSVP</label>
              <select v-model="attending" class="form-select">
                <option value="true">Attending</option>
                <option value="false">Not Attending</option>
              </select>
            </div>
            
            <div class="mb-3">
              <label class="form-label">Number of People</label>
              <input v-model="numPeople" type="number" class="form-control" min="1" required />
            </div>
            
            <div class="mb-3">
              <label class="form-label">Allergies (Optional)</label>
              <input v-model="allergies" type="text" class="form-control" />
            </div>
            
            <button type="submit" class="submit-button">Submit RSVP</button>
       </form>  
        <div v-if="successMessage" class="success-message">
        🎉 Thank you! <br />
        Your RSVP has been submitted. 
      </div>
     
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      name: "",
      attending: "true",
      numPeople: "",
      allergies: "",
      successMessage: false,
    };
  },
  methods: {
    async submitRSVP() {
      try {
        await addDoc(collection(db, "rsvps"), {
          name: this.name,
          attending: this.attending === "true",
          numPeople: this.numPeople,
          allergies: this.allergies
        });
        
        this.successMessage = true;

        this.name = "";
        this.attending = "true";
        this.numPeople = "";
        this.allergies = "";

        setTimeout(() => {
          this.$emit("close");
        }, 3000);

       
      } catch (error) {
        console.error("Error adding RSVP:", error);
      }
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;400;600&display=swap');

.rsvp-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.rsvp-form {
  background: #1b2340;
  color: #e1b97e;
  font-family: 'Montserrat', sans-serif;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  padding-top: 20px;
}

.rsvp-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: relative;
}

.rsvp-header h2 {
  font-family: 'Playfair Display', serif;
  color: #e1b97e;
  margin: 0 auto;
}

.close-button {
  font-size: 24px;
  background: none;
  border: none;
  color: #e1b97e;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 5px;
}

label {
  font-weight: bold;
}

input, select {
  font-family: 'Montserrat', sans-serif;
}

.submit-button {
  background-color: #f6bbd1;
}
.btn-danger:hover {
  background-color: #b0c5a2;
}
.success-message {
  background-color: #e1b97e;
  color: #1b2340;
  font-weight: bold;
  padding: 15px;
  border-radius: 8px;
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-in-out;
}

/* Fade-in effect */
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
</style>