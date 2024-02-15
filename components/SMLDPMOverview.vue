<script setup>


    let phases = [
        {'title': 'ML Development', 'content': "h", expanded: true},
        {'title': 'ML Development', 'content': "h", expanded: false},
        {'title': 'ML Development', 'content': "h", expanded: false},
    ]
</script>


<template>
   <!-- <div class="container">
        <button type="button" class="collapsible" @click="">Open Collapsible</button>
        <div class="content" :style={overflow: "auto"}>
            <p>Lorem ipsum...</p>
        </div>

    </div> -->
</template>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1em;
  color: red;
}

/* Style the button that is used to open and close the collapsible content */
.collapsible {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .collapsible:hover {
  background-color: #ccc;
}

/* Style the collapsible content. Note: hidden by default */
.content {
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
}

.phase-content {
  display: none;
}


</style>