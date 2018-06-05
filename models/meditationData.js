//hardcoded database of meditations and associated emotions
const meditations = {
  meditations: [
    {
      id: 1,
      name: "First meditation",
      description: "This is the text for the first meditation.",
      emotions: ["anticipation", "gratitude", "loneliness", "love", "worry", "depression"]
    },
    {
      id: 2,
      name: "Second meditation",
      description: "This is the text for the second meditation.",
      emotions: ["frustration", "gratitude", "depression", "love", "worry", "grief", "anger"]
    },
    {
      id: 3,
      name: "Third meditation",
      description: "This is the text for the third meditation.",
      emotions: ["joy", "fear", "frustration", "guilt", "happiness", "grief"]
    },
    {
      id: 4,
      name: "Fourth meditation",
      description: "This is the text for the third meditation.",
      emotions: ["joy", "worry", "love", "anticipation", "loneliness"]
    }
  ]
};

module.exports = meditations;
