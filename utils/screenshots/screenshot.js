const puppeteer = require('puppeteer');
const path = require('path');

async function takeHomePageScreenshot() {
  let browser;
  
  try {
    console.log('Launching browser...');
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    console.log('Browser launched successfully');
    
    // Set viewport
    await page.setViewport({ width: 1280, height: 800 });
    console.log('Viewport set');
    
    // Navigate to homepage
    console.log('Navigating to homepage...');
    await page.goto('https://exercise-tracker-frontend-dur0.onrender.com/', {
      waitUntil: 'networkidle2',
      timeout: 90000 // 90 second timeout
    });
    console.log('Navigation complete');
    
    // Take screenshot
    console.log('Taking screenshot...');
    await page.screenshot({
      path: 'homepage.png',
      fullPage: false
    });
    console.log('Screenshot saved as homepage.png');
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    if (browser) {
      await browser.close();
      console.log('Browser closed');
    }
  }
}

// Execute the function and handle any unhandled rejections
takeHomePageScreenshot().catch(error => {
  console.error('Unhandled rejection:', error);
  process.exit(1);
});
