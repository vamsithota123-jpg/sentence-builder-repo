const sentenceBuilder = {
    // Properties
    subject: "",
    verb: "",
    object: "",
  
    // Method to build the sentence
    buildSentence() {
      return this.subject && this.verb && this.object
        ? this.subject + " " + this.verb + " " + this.object
        : "Incomplete sentence";
    },
  
    // Method to update a property
    updateProperty(property, value) {
      if (this.hasOwnProperty(property)) {
        this[property] = value;
      } else {
        return "Invalid property";
      }
    }
  };
  
  // Example usage
  sentenceBuilder.updateProperty("subject", "The cat");
  sentenceBuilder.updateProperty("verb", "is chasing");
  sentenceBuilder.updateProperty("object", "the mouse");
  console.log(sentenceBuilder.buildSentence()); // Output: "The cat is chasing the mouse"
  
  // Testing invalid property update
  console.log(sentenceBuilder.updateProperty("adjective", "quick")); // Output: "Invalid property"
  