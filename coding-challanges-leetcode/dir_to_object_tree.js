const fs = require('fs');
const path = require('path');

// dummy_dir/a_dir/test1.md
// dummy_dir/b_dir/test2.md

function removeTrailingSlash(str) {
    return str.endsWith('/') ? str.slice(0, -1) : str;
}

function directoryToTree(rootDir, maxDepth) {
    function buildTree(currentPath, currentDepth) {
        const stats = fs.statSync(currentPath);
        const isDirectory = stats.isDirectory();

        // Create the node object
        const node = {
            name: path.basename(currentPath),
              path: removeTrailingSlash(rootDir +"/"+ path.relative(rootDir, currentPath)),
            type: isDirectory ? 'dir' : 'file',
            size: stats.size
        };

        // If it's a directory and not at max depth, build children nodes
        if (isDirectory && currentDepth < maxDepth) {
            node.children = fs.readdirSync(currentPath)
                .map(child => buildTree(path.join(currentPath, child), currentDepth + 1))
                .filter(Boolean); // Remove any null values
        } else if (isDirectory) {
            node.children = []; // Empty children array for directories at max depth
        }

        return node;
    }

    return buildTree(rootDir, 0);
}

// Example usage:
const rootPath = './dummy_dir/a_dir'; // Replace with your root directory path
const maxDepth = 3; // Replace with desired maximum depth

const tree = directoryToTree(rootPath, maxDepth);
console.log(JSON.stringify(tree, null, 2));
