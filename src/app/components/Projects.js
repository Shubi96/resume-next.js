import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="container mx-auto p-4 pl-8 ">
      <div className="lg:flex lg:justify-between">
        <div className="mb-4 lg:mb-0">
          <h1 className="text-left text-2xl font-bold mb-4">
            Project Experience
          </h1>
          <div className="flex-col items-center justify-center">
            <h2 className="font-bold text-xl mb-2">Shopify Projects</h2>
            <ul>
              <li>
                <strong>Store Creation and Management</strong>
                <ul>
                  <li>
                    Successfully created and managed multiple Shopify stores.
                  </li>
                  <li>
                    Implemented effective strategies for product organization
                    and categorization.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Product Management</strong>
                <ul>
                  <li>
                    Added and optimized various products within Shopify stores.
                  </li>
                  <li>
                    Implemented product reviews, social sharing, and email
                    marketing features using Shopify apps and plugins.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Liquid Template Customization</strong>
                <ul>
                  <li>
                    Demonstrated proficiency in liquid template modification for
                    theme customization.
                  </li>
                  <li>
                    Implemented dev-side modifications to enhance website
                    aesthetics and functionality.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Website Optimization</strong>
                <ul>
                  <li>
                    Optimized site performance and SEO using Shopify best
                    practices and tools.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <h2 className="font-bold text-xl mb-2 mt-4">WordPress Projects</h2>
          <ul>
            <li>
              <strong>Full Website Development</strong>
              <ul>
                <li>
                  Developed and launched complete websites using WordPress.
                </li>
                <li>
                  Integrated diverse features such as categories, products, and
                  sales pages.
                </li>
              </ul>
            </li>
            <li>
              <strong>E-commerce Integration</strong>
              <ul>
                <li>
                  Integrated Stripe and PayPal payment gateways for secure and
                  seamless transactions.
                </li>
                <li>
                  Proficiently worked with WordPress plugins including
                  Elementor, WP Bakery, WP Forms, and WooCommerce.
                </li>
              </ul>
            </li>
            <li>
              <strong>Content Management</strong>
              <ul>
                <li>Created and managed blog and magazine websites.</li>
                <li>
                  Designed and implemented interactive landing pages for
                  enhanced user engagement.
                </li>
              </ul>
            </li>
          </ul>

          <h2 className="font-bold text-xl mb-2 mt-4">
            Website Editors (WIX, Kajabi, Hubspot, Squarespace)
          </h2>
          <ul>
            <li>
              <strong>WIX Website Editor</strong>
              <ul>
                <li>Developed multiple blog and magazine websites on WIX.</li>
                <li>
                  Specialized in website speed optimization within the WIX
                  platform.
                </li>
              </ul>
            </li>
            <li>
              <strong>Kajabi CMS</strong>
              <ul>
                <li>Created and customized four websites.</li>
                <li>
                  Developed Liquid theme templates via custom code for unique
                  and custom website functionalities.
                </li>
              </ul>
            </li>
            <li>
              <strong>Hubspot</strong>
              <ul>
                <li>
                  Successfully completed three blog websites, managing content
                  such as images and text.
                </li>
              </ul>
            </li>
            <li>
              <strong>Squarespace</strong>
              <ul>
                <li>
                  Accomplished three website tasks, showcasing versatility in
                  Squarespace website editor.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-bold text-xl mb-2">Key Achievements</h2>
        <ul>
          <li>
            Demonstrated versatility by working on various website editors,
            including WIX, Kajabi, Hubspot, and Squarespace.
          </li>
          <li>
            Proven ability to optimize website speed and performance across
            different platforms.
          </li>
          <li>
            Extensive experience in e-commerce integration and payment gateway
            setup for enhanced user experience.
          </li>
        </ul>
        <h2 className="font-bold text-xl mb-2 mt-4">
          Personal Portfolio Website
        </h2>
        <ul>
          <li>
            <strong>Website Development</strong>
            <ul>
              <li>
                Developed a personal resume website/portfolio using Next.js.
              </li>
              <li>
                Implemented a modern and responsive design to showcase skills,
                projects, and achievements.
              </li>
            </ul>
          </li>
          <li>
            <strong>Technologies Used</strong>
            <ul>
              <li>
                Next.js - JavaScript framework for efficient and server-rendered
                web development.
              </li>
              <li>
                Material UI - React component library for a consistent and
                visually appealing user interface.
              </li>
              <li>
                Tailwind CSS - Utility-first CSS framework for building modern
                and responsive designs.
              </li>
              <li>
                Prisma - Modern database toolkit for TypeScript and Node.js.
              </li>
              <li>
                PostgreSQL - Open-source relational database management system.
              </li>
              <li>
                Supabase - Open-source alternative to Firebase for database
                management.
              </li>
              {/* Add more details about the technologies used if necessary */}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
