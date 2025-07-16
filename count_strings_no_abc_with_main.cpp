#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    static const int MOD = 1000000007;

    using Matrix = vector<vector<long long>>;

    Matrix matMul(const Matrix &a, const Matrix &b) {
        int n = (int)a.size();
        Matrix res(n, vector<long long>(n, 0));
        for (int i = 0; i < n; i++) {
            for (int k = 0; k < n; k++) {
                if (a[i][k] == 0) continue;
                for (int j = 0; j < n; j++) {
                    res[i][j] = (res[i][j] + a[i][k] * b[k][j]) % MOD;
                }
            }
        }
        return res;
    }

    Matrix matPow(Matrix base, long long exp) {
        int n = (int)base.size();
        Matrix res(n, vector<long long>(n, 0));
        for (int i = 0; i < n; i++) res[i][i] = 1; // Identity matrix
        while (exp > 0) {
            if (exp & 1) res = matMul(res, base);
            base = matMul(base, base);
            exp >>= 1;
        }
        return res;
    }

    int countStrings(int N) {
        if (N == 1) {
            return 3;
        }
        if (N == 2) {
            return 9;
        }

        Matrix trans(9, vector<long long>(9, 0));
        for (int x = 0; x < 3; x++) {
            for (int y = 0; y < 3; y++) {
                int from = x * 3 + y;
                for (int z = 0; z < 3; z++) {
                    if (x == 0 && y == 1 && z == 2) {
                        continue;
                    }
                    int to = y * 3 + z;
                    trans[from][to] = 1;
                }
            }
        }

        vector<long long> init(9, 1);

        Matrix transExp = matPow(trans, N - 2);

        long long result = 0;
        for (int i = 0; i < 9; i++) {
            long long sum = 0;
            for (int j = 0; j < 9; j++) {
                sum = (sum + init[j] * transExp[j][i]) % MOD;
            }
            result = (result + sum) % MOD;
        }

        return (int)result;
    }
};

int main() {
    Solution sol;
    int testCases[] = {1, 3, 20};
    for (int n : testCases) {
        cout << "Input: " << n << endl;
        cout << "Output: " << sol.countStrings(n) << endl;
        cout << "-------------------" << endl;
    }
    return 0;
}
