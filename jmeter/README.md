# Performance Test Report: JSONPlaceholder API

## Peformance Test Overview
The performance test was executed using Apache JMeter to simulate 25 virtual users over a 2-minute duration, targeting the https://jsonplaceholder.typicode.com/posts endpoint.
Key performance metrics—response time, throughput, error rate, and system resource usage—were captured to evaluate the API’s scalability, stability, and reliability under concurrent load.

## Executive Summary

This report presents the findings of a comprehensive performance test conducted on the JSONPlaceholder API, specifically targeting the /posts endpoint. Tests were executed with two different user loads (1 user vs. 25 concurrent users) to evaluate the API's performance characteristics, scalability, and system resource utilization under varying levels of stress.

The primary objective was to determine how the API responds to increased load and identify potential bottlenecks that might impact performance in a production environment. Overall, the JSONPlaceholder API demonstrated good scalability with acceptable response time degradation when transitioning from a single user to 25 concurrent users.

### Key Findings:

- Response Time: Average response time increased from 47ms (1 user) to 65ms (25 users), representing a 38% increase
- Throughput: Increased significantly from 19.35 requests/sec (1 user) to 291.92 requests/sec (25 users)
- Error Rate: 0% errors across both test scenarios, indicating robust API reliability
- System Resources: CPU utilization increased from 12-18% (1 user) to 21-37% (25 users)
- Maximum Response Time: Increased from 187ms (1 user) to 1101ms (25 users)

## Test Configuration

### Test Environment:

- Hardware: Intel Core i7-1165G7 @ 2.80GHz, 16GB RAM
- Network: Wi-Fi connection
- Testing Tool: Apache JMeter 5.6.3

### Test Parameters:

- Test Duration: 120 seconds
- Ramp-up Period: 30 seconds
- Endpoint Tested: GET https://jsonplaceholder.typicode.com/posts
- Connection Timeout: 5000ms
- Response Timeout: 10000ms

### Test Scenarios:

- Single User Test: 1 concurrent user
- Load Test: 25 concurrent users

## Performance Metrics Comparison

### Response Time Metrics
| Metric | 1 User | 25 Users | % Change |
|--------|---------|----------|----------|
| Average Response Time | 47ms | 65ms | +38.3% |
| Median Response Time | 45ms | 63ms | +40.0% |
| 90% Response Time | 54ms | 82ms | +51.9% |
| 95% Response Time | 60ms | 91ms | +51.7% |
| 99% Response Time | 79ms | 135ms | +70.9% |
| Min Response Time | 35ms | 35ms | 0% |
| Max Response Time | 187ms | 1101ms | +489.3% |

### Throughput Metrics
| Metric | 1 User | 25 Users | % Change |
|--------|---------|----------|----------|
| Throughput (req/sec) | 19.35 | 291.92 | +1,408.1% |
| Total Samples | 2,324 | 35,034 | +1,407.5% |
| KB/sec Received | 545.8 | 8,235.91 | +1,409.1% |
| KB/sec Sent | 2.61 | 39.34 | +1,406.5% |

### System Resource Utilization
| Metric | 1 User | 25 Users | % Change |
|--------|---------|----------|----------|
| CPU Utilization (avg) | 12-18% | 21-37% | +105.6% |
| CPU Speed | 2.04-2.73 GHz | 2.40-3.68 GHz | +34.8% |
| Memory Usage | 84-85% | 82-83% | -2.4% |
| Network Bandwidth | 4-8 Mbps | 39-86 Mbps | +975.0% |

## Graphical Analysis

The response time graphs show:

- Single User (1 User): Consistent response times between 44-48ms with occasional small spikes up to 53ms. The response pattern demonstrates stability and predictability.
- Multiple Users (25 Users): Slightly higher baseline response times around 65-69ms with more pronounced fluctuations. There is greater variability in the response times but still within acceptable performance ranges.

The CPU utilization graphs indicate:

- Single User: CPU utilization remained relatively low (12-18%)
- Multiple Users: CPU utilization increased but remained at manageable levels (21-37%)

## Bottlenecks and Limitations

No critical bottlenecks were identified during testing. The system handled the 25-user load without errors or significant performance degradation. However, several observations warrant attention:

- Maximum Response Time: The significant increase in maximum response time (187ms to 1101ms) suggests occasional processing delays under higher loads.
- CPU Utilization: The increase in CPU utilization, while not critical, indicates that higher concurrent user counts could potentially lead to CPU saturation.
- 99th Percentile Response Time: The 70.9% increase in 99th percentile response time suggests that a small percentage of requests experience more substantial delays under load.

## Recommendations for Optimization

1. Connection Pooling: Implement or optimize connection pooling to reduce the overhead of establishing new connections under high load.
2. Content Caching: Consider implementing cache mechanisms for the /posts endpoint to reduce backend processing for frequently requested data.
3. Load Balancing: For production environments expecting higher traffic than tested, implement load balancing to distribute requests across multiple instances.
4. Monitoring: Set up monitoring for 99th percentile response times as an early indicator of potential performance issues.
5. Further Testing: Conduct additional tests with higher user loads (50, 100, 200 users) to determine the breaking point and establish operational limits.

## Conclusion

The JSONPlaceholder API demonstrated good performance characteristics under both single-user and 25-user concurrent loads. The system showed linear scalability with predictable response time degradation as load increased. The absence of errors and the substantial increase in throughput suggest a well-designed API.

The observed response time increase (38.3% on average) is acceptable given the 25x increase in concurrent users. The system appears to have adequate capacity for handling the tested load, with room for additional scaling. However, the increase in maximum response time warrants attention if consistent response times are critical for the application.

Based on these results, the JSONPlaceholder API should comfortably support at least 25 concurrent users in a production environment with similar hardware specifications. For higher user loads, additional testing and potential optimizations may be required.