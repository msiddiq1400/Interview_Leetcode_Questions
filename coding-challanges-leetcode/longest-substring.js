var lengthOfLongestSubstring = function(s) {
    var n = s.length;     
    var res = 0;
    for(var i = 0; i < n; i++)
    {
        var visited = new Array(256);
        for(var j = i; j < n; j++)
        {
            if (visited[s.charCodeAt(j)] == true)
                break;
            else
            {
                res = Math.max(res, j - i + 1);
                visited[s.charCodeAt(j)] = true;
            }
        }
    }
    return res;
};