# Test Plan & Strategy

## 1. **Introduction**
### 1.1 **Objective**
The purpose of this test plan is to validate the functionality, performance, data accuracy, error handling, and security of the CoinGecko API endpoints. The testing approach includes manual testing, automated API testing, performance validation, and basic security assessment.

### 1.2 **Scope**
This test plan covers the following API endpoints:
- **Simple Price:** GET /simple/price
- **Coin Markets:** GET /coins/markets
- **Coin List:** GET /coins/list

The following testing areas will be covered:
- **Functional Testing:** Validate API responses against expected outputs.
- **Performance Testing:** Measure response times under different loads.
- **Data Accuracy Testing:** Ensure returned data matches expected results.
- **Error Handling Testing:** Verify proper error messages for invalid requests.
- **Security Testing:** Identify vulnerabilities like unauthorized access.

## 2. **Test Deliverables**
- **Test Plan Document** (This document)
- **Postman Collection with Test Cases**
- **Newman Execution Report**
- **Performance Test Report (K6)**
- **Security Findings Report**

## 3. **Test Completion Criteria**
- All functional test cases have passed.
- Performance tests results are collected.
- Security testing is completed.
- Test execution summary is documented.

## 4. **Appendix & References**
- **API Documentation:** [\[CoinGecko API Docs\]](https://docs.coingecko.com/reference/introduction)
- **CI/CD Pipeline Configuration:** [\[Link to CI/CD setup\]](https://github.com/felipejgribeiro/onchain-qa-api-test/actions)

---
