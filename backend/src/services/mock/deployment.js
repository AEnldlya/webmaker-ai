const { v4: uuidv4 } = require('uuid');

const deployToVercel = async (websiteData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  const deploymentId = `dpl_${uuidv4().replace(/-/g, '').substring(0, 20)}`;
  
  return {
    deployment_id: deploymentId,
    status: 'ready',
    preview_url: `https://${websiteData.business_name.toLowerCase().replace(/\s+/g, '-')}-preview.vercel.app`,
    deployed_at: new Date().toISOString()
  };
};

const getDeploymentStatus = async (deploymentId) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    deployment_id: deploymentId,
    status: 'ready',
    readyState: 'READY'
  };
};

module.exports = { deployToVercel, getDeploymentStatus };
