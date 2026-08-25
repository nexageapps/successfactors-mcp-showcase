import { BLOG_URL, HF_SPACE_URL, SPACE_URL } from '../data'

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fine">
          <span>Read-only in this release · write tools require confirm=true, on the roadmap</span>
          <span>Independent integration for SAP SuccessFactors. Not an SAP product.</span>
          <a href={BLOG_URL} target="_blank" rel="noopener noreferrer">
            SAP Community: Start with the security
          </a>
        </div>
        <div className="tags">
          <span>agents</span>
          <span>AI</span>
          <span>Joule</span>
          <span>successfactors hcm suite</span>
          <a href={SPACE_URL} target="_blank" rel="noopener noreferrer">
            Live Space
          </a>
          <a href={HF_SPACE_URL} target="_blank" rel="noopener noreferrer">
            Hugging Face
          </a>
        </div>
      </div>
    </footer>
  )
}
