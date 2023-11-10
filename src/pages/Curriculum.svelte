<script>
  // Sample data for the curriculum
  let personalInfo = {
    name: "John Doe",
    title: "Web Developer",
    email: "john.doe@example.com",
    phone: "+1234567890",
  };

  let experience = [
    {
      company: "TechCorp",
      position: "Frontend Developer",
      duration: "Jan 2020 - Present",
      description: "Worked on various web applications and improved UI/UX."
    },
    {
      company: "WebWorks",
      position: "Backend Developer",
      duration: "Dec 2018 - Dec 2019",
      description: "Developed API endpoints and worked on database optimization."
    },
  ];

  // ... Add more sections like education, skills, etc. as needed
</script>

<div class="bg-white p-8 max-w-3xl mx-auto rounded shadow-md">
  <div class="mb-6">
    <h1 class="text-3xl font-semibold">{personalInfo.name}</h1>
    <p class="text-xl text-gray-600">{personalInfo.title}</p>
  </div>
  
  <div class="mb-4">
    <p><strong>Email:</strong> {personalInfo.email}</p>
    <p><strong>Phone:</strong> {personalInfo.phone}</p>
  </div>

  <div class="mb-6">
    <h2 class="text-2xl font-semibold mb-4">Experience</h2>
    {#each experience as exp}
      <div class="mb-4">
        <h3 class="text-xl font-medium">{exp.position} at {exp.company}</h3>
        <p class="text-gray-600">{exp.duration}</p>
        <p>{exp.description}</p>
      </div>
    {/each}
  </div>

  <!-- You can add more sections for education, skills, etc. -->
</div>
