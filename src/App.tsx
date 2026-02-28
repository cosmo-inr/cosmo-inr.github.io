import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, FileText, Play, Code } from 'lucide-react';

const Placeholder = ({ title, height = "h-64", className = "" }: { title: string, height?: string, className?: string }) => (
  <div className={`w-full ${height} bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 rounded-xl flex flex-col items-center justify-center text-zinc-500 dark:text-zinc-400 text-sm font-mono p-4 text-center ${className}`}>
    <span className="mb-2 opacity-50"><Code size={24} /></span>
    <span>[ Figure Placeholder: {title} ]</span>
  </div>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900 dark:selection:bg-indigo-900/50 dark:selection:text-indigo-100">
      {/* Navigation / Theme Toggle */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 z-50 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-semibold text-sm tracking-tight">COSMO-INR</span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24 space-y-20">
        {/* Header Section */}
        <header className="text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            COSMO-INR: Complex Sinusoidal Modulation for Implicit Neural Representations
          </h1>
          
          <div className="space-y-4">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg font-medium text-indigo-600 dark:text-indigo-400">
              <a href="#" className="hover:underline">Pandula Thennakoon</a>
              <a href="#" className="hover:underline">Avishka Ranasinghe</a>
              <a href="#" className="hover:underline">Mario De Silva</a>
              <a href="#" className="hover:underline">Buwaneka Epakanda</a>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg font-medium text-indigo-600 dark:text-indigo-400">
              <a href="#" className="hover:underline">Roshan Godaliyadda</a>
              <a href="#" className="hover:underline">Parakrama Ekanayake</a>
              <a href="#" className="hover:underline">Vijitha Herath</a>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              Department of Electrical and Electronic Engineering<br/>
              University of Peradeniya, Sri Lanka
            </p>
            <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mt-4">
              Published as a conference paper at ICLR 2026
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="#" className="flex items-center gap-2 px-6 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors">
              <FileText size={18} />
              Paper
            </a>
            <a href="#" className="flex items-center gap-2 px-6 py-2.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-full font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
              <Github size={18} />
              Code
            </a>
            <a href="#" className="flex items-center gap-2 px-6 py-2.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-full font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
              <Play size={18} />
              Colab
            </a>
          </div>
        </header>

        {/* Abstract */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold border-b border-zinc-200 dark:border-zinc-800 pb-2">Abstract</h2>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify">
            Implicit neural representations (INRs) have recently emerged as a powerful paradigm for modeling data, offering a continuous alternative to traditional discrete signal representations. Their ability to compactly encode complex signals has led to strong performance across a wide range of computer vision tasks. However, key challenges persist, including spectral bias (reduced sensitivity to high-frequency content), limited robustness to noise, and difficulties in jointly capturing local and global features. In this paper, we explore the underlying mechanism of INR signal representation using harmonic analysis and Chebyshev Polynomials. Through rigorous mathematical proof, we show that modulating activation functions using a complex sinusoidal term yields better and complete spectral support throughout the network. We introduce <strong>COSMO-RC</strong>, a novel activation function and regularized architecture that leverages these findings. Through extensive experiments, we demonstrate that COSMO-RC significantly outperforms existing state-of-the-art methods in image reconstruction, denoising, super-resolution, inpainting, and 3D shape reconstruction.
          </p>
        </section>

        {/* About INRs and COSMO-RC */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold border-b border-zinc-200 dark:border-zinc-800 pb-2">About INRs and the COSMO-RC Framework</h2>
          <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify space-y-4">
            <p>
              Implicit Neural Representations (INRs) parameterize continuous signals using multi-layer perceptrons (MLPs), overcoming the resolution limits of traditional discrete grids. While they excel at representing complex data, their performance heavily relies on the choice of activation functions.
            </p>
            <p>
              Through harmonic distortion analysis, we discovered a structural limitation in common symmetric activation functions: they suffer from <strong>spectral attenuation</strong>, which limits their ability to capture high-frequency details (often referred to as spectral bias).
            </p>
            <p>
              To overcome this, we propose <strong>COSMO (Complex Sinusoidal Modulation)</strong>. By injecting a complex sinusoidal term into the activation function, we preserve both odd and even frequency components, effectively mitigating spectral attenuation. Our proposed architecture, <strong>COSMO-RC</strong>, builds upon the Raised Cosine activation and incorporates a prior knowledge embedder to dynamically adjust activation parameters. This approach not only accelerates convergence but also provides superior signal representation, accelerating INR research by providing a theoretically grounded method to overcome spectral bias.
            </p>
          </div>
        </section>

        {/* Model Architecture */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-zinc-200 dark:border-zinc-800 pb-2">Model Architecture</h2>
          <img src="/model.png" alt="COSMO-RC Model Architecture" className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800" />
          <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
            Complete pipeline of the COSMO-RC model architecture. A prior knowledge embedder with a sigmoid regularizer dynamically adjusts the parameters of the complex modulated Raised Cosine activation functions.
          </p>
        </section>

        {/* Results */}
        <section className="space-y-12">
          <h2 className="text-2xl font-bold border-b border-zinc-200 dark:border-zinc-800 pb-2">Results</h2>
          
          {/* Image Reconstruction */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">1. Image Reconstruction</h3>
            <p className="text-zinc-700 dark:text-zinc-300">
              COSMO-RC consistently achieves the highest performance on the Kodak dataset, averaging <strong>41.24 dB PSNR</strong>, significantly exceeding the nearest counterpart (INCODE) by +5.67 dB. It shows clear improvements in clarity and converges faster while maintaining stability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Placeholder title="Kodak Dataset Statistics (Fig. 4)" height="h-64" />
              <Placeholder title="Visual Comparison - Kodak Image 20 (Fig. 5)" height="h-64" />
            </div>
          </div>

          {/* Denoising */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">2. Image Denoising</h3>
            <p className="text-zinc-700 dark:text-zinc-300">
              Evaluated on the DIV2K dataset with photon noise, COSMO-RC surpasses SOTA methods with a <strong>+0.46 dB PSNR increase</strong> over INCODE. Visual observations confirm that COSMO-RC preserves image colors and structural integrity much better than existing methods.
            </p>
            <Placeholder title="Denoising Visual Results (Fig. 6)" height="h-64" />
          </div>

          {/* Super Resolution */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">3. Image Super-Resolution</h3>
            <p className="text-zinc-700 dark:text-zinc-300">
              For 2×, 4×, and 6× super-resolution tasks on the DIV2K dataset, COSMO-RC surpasses SOTA methods by a considerable margin in both PSNR and SSIM. It yields the sharpest details while preserving smoothness and original color contrast.
            </p>
            <Placeholder title="6x Super-Resolution Comparison (Fig. 13)" height="h-64" />
          </div>

          {/* NeRF */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">4. Neural Radiance Fields (NeRF)</h3>
            <p className="text-zinc-700 dark:text-zinc-300">
              Integrated into a NeRF framework for novel-view synthesis on the LEGO dataset, COSMO-RC preserves fine structural details (e.g., chain-drive sprocket gaps) accurately. It achieves an average PSNR of <strong>29.50 dB</strong>, marking a substantial +3.45 dB improvement over the second-best approach.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Placeholder title="NeRF Rendered Outputs (Fig. 9)" height="h-64" />
              <video autoPlay loop muted playsInline className="w-full aspect-square object-contain bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <source src="/nerf_lego.mp4" type="video/mp4" />
              </video>
              
            </div>
          </div>
        </section>

        {/* Citation */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold border-b border-zinc-200 dark:border-zinc-800 pb-2">Citation</h2>
          <div className="relative group">
            <pre className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-xl overflow-x-auto text-sm font-mono text-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800">
              <code>{`@inproceedings{thennakoon2026cosmo,
  title={COSMO-INR: COMPLEX SINUSOIDAL MODULATION FOR IMPLICIT NEURAL REPRESENTATIONS},
  author={Thennakoon, Pandula and Ranasinghe, Avishka and De Silva, Mario and Epakanda, Buwaneka and Godaliyadda, Roshan and Ekanayake, Parakrama and Herath, Vijitha},
  booktitle={Published as a conference paper at ICLR 2026},
  year={2026}
}`}</code>
            </pre>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 text-center text-zinc-500 dark:text-zinc-400 text-sm">
        <p>© 2026 COSMO-INR Authors. All rights reserved.</p>
      </footer>
    </div>
  );
}
