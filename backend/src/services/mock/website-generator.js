const { v4: uuidv4 } = require('uuid');

const generateWebsite = async (businessData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const { business_name, business_type } = businessData;
  
  // Generate mock HTML content
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${business_name}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
        .hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 100px 20px; text-align: center; }
        .hero h1 { font-size: 3rem; margin-bottom: 20px; }
        .hero p { font-size: 1.2rem; max-width: 600px; margin: 0 auto; }
        .services { padding: 80px 20px; max-width: 1200px; margin: 0 auto; }
        .services h2 { text-align: center; font-size: 2.5rem; margin-bottom: 50px; }
        .service-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
        .service-card { background: #f8f9fa; padding: 30px; border-radius: 10px; text-align: center; }
        .contact { background: #2d3748; color: white; padding: 80px 20px; text-align: center; }
        .contact h2 { font-size: 2.5rem; margin-bottom: 30px; }
        .btn { display: inline-block; background: #667eea; color: white; padding: 15px 40px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
        footer { background: #1a202c; color: white; text-align: center; padding: 20px; }
    </style>
</head>
<body>
    <section class="hero">
        <h1>${business_name}</h1>
        <p>Professional ${business_type} services tailored to your needs. Quality you can trust.</p>
        <a href="#contact" class="btn">Get in Touch</a>
    </section>
    
    <section class="services">
        <h2>Our Services</h2>
        <div class="service-grid">
            <div class="service-card">
                <h3>Service One</h3>
                <p>Comprehensive solutions designed to meet your specific requirements.</p>
            </div>
            <div class="service-card">
                <h3>Service Two</h3>
                <p>Expert consultation and implementation for optimal results.</p>
            </div>
            <div class="service-card">
                <h3>Service Three</h3>
                <p>Ongoing support and maintenance to ensure continued success.</p>
            </div>
        </div>
    </section>
    
    <section class="contact" id="contact">
        <h2>Contact Us</h2>
        <p>Ready to get started? Reach out today for a free consultation.</p>
        <a href="tel:555-0100" class="btn">Call Now</a>
    </section>
    
    <footer>
        <p>&copy; ${new Date().getFullYear()} ${business_name}. All rights reserved.</p>
    </footer>
</body>
</html>`;

  return {
    id: uuidv4(),
    html_content: htmlContent,
    files: [
      { path: 'index.html', content: htmlContent },
      { path: 'package.json', content: JSON.stringify({ name: business_name.toLowerCase().replace(/\s+/g, '-'), version: '1.0.0' }, null, 2) }
    ],
    lighthouse_score: Math.floor(Math.random() * 30) + 70 // 70-100
  };
};

module.exports = { generateWebsite };
