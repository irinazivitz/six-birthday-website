<template>
  <div >
    <img src="../assets/InviteFinal.jpg" alt="Invite_image" class="hero-image" />
    
    <button class="rsvp-button" @click="showRSVP = true">RSVP Now</button>

    <RSVPForm v-if="showRSVP" @close="showRSVP = false" />
    
    <div class="party-details  mt-10 p-4 rounded">
      <h2 class="text-center">Party Time!</h2>
      <p><strong>✨ What:</strong> Leah is turning six! Join us for a fabulous glam makeover and dance party to celebrate her special day.</p>
      <p><strong>📅 When:</strong> March 29, starting at <strong>3 PM</strong>.</p>
      <p>💃 <strong>Dance entertainment:</strong> 4–5 PM, followed by pizza and cake.</p>
      <p>👨‍👩‍👧‍👦 The whole family is welcome—we’ll have <strong>snacks and refreshments</strong> for adults too!</p>
      <p><strong>📍 Where:</strong> Our home 509 Montrose St, Philadelphia 19147</p>
     
      <p><strong>💖 P.S.</strong> Overdressing is highly encouraged! ✨</p>
      <hr>
      <h3 class="text-center">Helpful Info</h3>
      <ul >
        <li>🐶 We have a <strong>large, friendly dog</strong>.</li>
        <li>🚗 <strong>Street parking.</strong> </li>
        <li>👞 <strong>Shoes-free house</strong>, so feel free to bring socks or indoor fancy shoes !</li>
         <li>
          <a href="https://a.co/d/0JvifP3" class="book-link">
            📖 Suggested pre-read (Optional)
            </a>
         </li>
       
      </ul>
    </div>
  </div>
</template>
 
<script>
import RSVPForm from "@/components/RSVPForm.vue";

export default {
  components: { RSVPForm },
  data() {
    return { showRSVP: false };
  }
};
</script>

<style>
/* Typography */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;400;600&display=swap');



body {
  background-color: #1b2340 !important;
  color: #e1b97e !important;
  font-family: 'Montserrat', sans-serif !important;
  text-align: center!important;
}

h2, h3 {
  font-family: 'Playfair Display', serif;
  color: #e1b97e;
  margin-top: 15px !important;
  margin-bottom: 20px !important;
}

p, li {
  font-size: 18px;
  color: #e1b97e;
}

.hero-image {
  width: 100%;
  height: auto; 
  max-height: 700px; 
  object-fit: contain;
  display: block;
  margin-bottom: 20px;
}

button {
  font-family: 'Montserrat', sans-serif !important;
  font-weight: bold;
  padding: 12px 24px;
  border: none;
  border-radius: 5px !important;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  margin: 20px !important;
}

.rsvp-button {
  background-color: #f6bbd1;
  color: white;
}
.rsvp-button:hover {
  background-color: #d1acd4;
  transform: scale(1.1);
}

.party-details {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px !important;
  border-radius: 10px !important;
  padding-bottom: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
}
.book-link {
  color: #e1b97e;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  gap: 5px; 
  transition: color 0.3s ease;
}


.book-link:hover {
  color: #ffffff; 
  text-decoration: none; 
}
</style>
